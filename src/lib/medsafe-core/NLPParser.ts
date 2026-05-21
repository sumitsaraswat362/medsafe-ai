import { DRUGS, Drug } from './database';

export class NLPParser {
  /**
   * Parse a natural language string and extract recognized drugs.
   * "I take Aspirin for my heart and Ibuprofen for my knee" -> [Aspirin, Ibuprofen]
   */
  static extractDrugs(inputText: string): Drug[] {
    const text = inputText.toLowerCase();
    
    // Replace common punctuation with spaces to allow word boundary matching
    const normalizedText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, " ");
    
    // We want to avoid matching substrings inside other words (e.g. matching "asp" inside "gasping")
    // We'll use word boundaries \b
    
    const matchedDrugs: Drug[] = [];

    for (const drug of DRUGS) {
      // Check if any of the drug's aliases are present as whole words in the text
      const isMatched = drug.aliases.some(alias => {
        // Create a regex for the alias with word boundaries
        const regex = new RegExp(`\\b${alias.toLowerCase()}\\b`, 'i');
        return regex.test(normalizedText);
      });

      if (isMatched) {
        matchedDrugs.push(drug);
      }
    }

    return matchedDrugs;
  }
}
