import { DRUGS, INTERACTIONS, Drug, Interaction, Severity, PatientProfile } from './database';

export interface PatientWarning {
  drug: Drug;
  condition: string;
  severity: Severity;
  description: string;
}

export interface AnalysisResult {
  drugs: Drug[];
  interactions: InteractionPair[];
  patientWarnings: PatientWarning[];
  overallRiskScore: number; // 0-10
  highestSeverity: Severity;
}

export interface InteractionPair {
  drug1: Drug;
  drug2: Drug;
  interaction: Interaction;
}

const SEVERITY_SCORES: Record<Severity, number> = {
  'Safe': 0, 'Mild': 2, 'Moderate': 5, 'Severe': 8, 'Critical': 10
};

export class InteractionEngine {
  
  static getDrugById(id: string): Drug | undefined {
    return DRUGS.find(d => d.id === id);
  }

  static checkPair(id1: string, id2: string): Interaction | undefined {
    return INTERACTIONS.find(i => 
      (i.drug1Id === id1 && i.drug2Id === id2) ||
      (i.drug1Id === id2 && i.drug2Id === id1)
    );
  }

  static analyze(drugIds: string[], profile?: PatientProfile): AnalysisResult {
    const uniqueIds = Array.from(new Set(drugIds));
    const drugs = uniqueIds.map(id => this.getDrugById(id)).filter(Boolean) as Drug[];
    
    const interactions: InteractionPair[] = [];
    const patientWarnings: PatientWarning[] = [];
    
    let maxSeverityScore = 0;
    let highestSeverity: Severity = 'Safe';
    let cumulativeScore = 0;

    // Check Drug-to-Drug Interactions
    for (let i = 0; i < drugs.length; i++) {
      for (let j = i + 1; j < drugs.length; j++) {
        const drug1 = drugs[i];
        const drug2 = drugs[j];
        const interaction = this.checkPair(drug1.id, drug2.id);

        if (interaction) {
          interactions.push({ drug1, drug2, interaction });
          const score = SEVERITY_SCORES[interaction.severity];
          cumulativeScore += score;
          if (score > maxSeverityScore) {
            maxSeverityScore = score;
            highestSeverity = interaction.severity;
          }
        }
      }
    }

    // Check Drug-to-Disease Profile Warnings
    if (profile && profile.conditions.length > 0) {
      drugs.forEach(drug => {
        profile.conditions.forEach(condition => {
          if (drug.contraindications.includes(condition)) {
            patientWarnings.push({
              drug,
              condition,
              severity: 'Severe',
              description: `WARNING: ${drug.name} is highly contraindicated for patients with ${condition}.`
            });
            
            cumulativeScore += SEVERITY_SCORES['Severe'];
            if (SEVERITY_SCORES['Severe'] > maxSeverityScore) {
              maxSeverityScore = SEVERITY_SCORES['Severe'];
              highestSeverity = 'Severe';
            }
          }
        });
      });
    }

    // Calculate Overall Risk Score
    let overallRiskScore = maxSeverityScore;
    if (interactions.length > 1 || patientWarnings.length > 0) {
       const otherScore = cumulativeScore - maxSeverityScore;
       overallRiskScore = Math.min(10, Math.round(maxSeverityScore + (otherScore * 0.15)));
    }

    return {
      drugs,
      interactions,
      patientWarnings,
      overallRiskScore,
      highestSeverity
    };
  }
}
