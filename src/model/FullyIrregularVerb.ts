import type { Verb } from './Verb.ts';

const emoji = '🤪';
const ser: Verb = {
  emoji: emoji,
  infinitive: 'ser',
  translation: 'essere',
  isReflexive: false,
  conjugation: [

  ],
};

export const fullyIrregularVerbs: Verb[] = [ser];