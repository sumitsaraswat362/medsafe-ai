import { AnalysisResult } from './InteractionEngine';
import { PatientProfile } from './database';

export class Summarizer {

  static generateSummary(result: AnalysisResult, profile?: PatientProfile): string {
    if (result.drugs.length === 0) {
      return "Please add medications to check for interactions.";
    }

    if (result.drugs.length === 1) {
      return `I see you take ${result.drugs[0].name}. Please add at least one more medication to check for interactions.`;
    }

    if (result.interactions.length === 0 && result.patientWarnings.length === 0) {
      let safe = `Great news! I've analyzed your ${result.drugs.length} medications and found no known interactions between them. `;
      if (profile?.age && profile.age >= 65) {
        safe += `Since you are ${profile.age}, continue to monitor for any unexpected side effects, as drug metabolism slows with age. `;
      }
      safe += `They appear safe to take together based on current data. Always inform your doctor about any new medications.`;
      return safe;
    }

    const { interactions, highestSeverity } = result;
    const criticalCount = interactions.filter(i => i.interaction.severity === 'Critical').length;
    const severeCount = interactions.filter(i => i.interaction.severity === 'Severe').length;
    const moderateCount = interactions.filter(i => i.interaction.severity === 'Moderate').length;

    let summary = `I've analyzed your ${result.drugs.length} medications. `;

    if (highestSeverity === 'Critical') {
      summary += `URGENT: I found ${criticalCount} CRITICAL interactions in your profile that require immediate medical attention. `;
      summary += `These combinations can be life-threatening and cause severe complications. `;
      summary += `Do not take these medications together without strict medical supervision. `;
      if (profile?.age && profile.age >= 65) {
        summary += `At age ${profile.age}, these risks are significantly amplified. `;
      }
      summary += `Please review the specific mechanisms below and contact your healthcare provider today to discuss the recommended safer alternatives.`;
    } else if (highestSeverity === 'Severe') {
      summary += `I found ${severeCount} severe interactions that require prompt medical review. `;
      summary += `While not immediately life-threatening, these combinations pose a high risk of adverse effects. `;
      summary += `Please schedule a consultation with your doctor soon to adjust your regimen, and monitor closely for any unusual symptoms in the meantime.`;
    } else if (highestSeverity === 'Moderate') {
      summary += `I found ${moderateCount} moderate interactions. `;
      summary += `These are generally manageable, but you should be aware of potential side effects and discuss them at your next doctor's appointment. `;
      summary += `Sometimes simply adjusting the timing of your doses can minimize the risk.`;
    } else {
      summary += `I found only mild interactions. Your combination is generally considered safe, but review the details below.`;
    }

    return summary;
  }
}
