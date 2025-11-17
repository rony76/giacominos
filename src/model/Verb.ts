export interface Verb {
  infinitive: string;
  translation: string;
  conjugation?: string;
}

export const allVerbs: Verb[] = [
  { infinitive: 'hablar', translation: 'parlare' },
  { infinitive: 'comer', translation: 'mangiare' },
  { infinitive: 'vivir', translation: 'vivere' },
  // Add more verbs as needed
];
