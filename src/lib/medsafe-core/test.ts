import { InteractionEngine } from './InteractionEngine';
import { NLPParser } from './NLPParser';
import { Summarizer } from './Summarizer';

console.log("--- MEDSAFE AI BACKEND TEST ---");

// 1. Test NLP Parser
const userInput = "I take Aspirin for my heart, Ibuprofen for my knees, and Sertraline for mood.";
console.log(`\nInput text: "${userInput}"`);
const extractedDrugs = NLPParser.extractDrugs(userInput);
console.log("Extracted Drugs:", extractedDrugs.map(d => d.name).join(', '));

// 2. Test Interaction Engine
const drugIds = extractedDrugs.map(d => d.id);
const analysis = InteractionEngine.analyze(drugIds);

console.log("\n--- ANALYSIS RESULTS ---");
console.log(`Overall Risk Score: ${analysis.overallRiskScore}/10`);
console.log(`Highest Severity: ${analysis.highestSeverity}`);
console.log(`Total Interactions Found: ${analysis.interactions.length}`);

analysis.interactions.forEach(i => {
  console.log(`\n[${i.interaction.severity.toUpperCase()}] ${i.drug1.name} + ${i.drug2.name}`);
  console.log(`Mechanism: ${i.interaction.mechanism}`);
  console.log(`Description: ${i.interaction.description}`);
});

// 3. Test Summarizer
console.log("\n--- AI SMART SUMMARY ---");
const summary = Summarizer.generateSummary(analysis);
console.log(summary);
