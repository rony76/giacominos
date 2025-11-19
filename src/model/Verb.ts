import { type Conjugation } from './Conjugation';

export interface Verb {
  emoji: string;
  infinitive: string;
  translation: string;
  isReflexive: boolean;
  conjugation: Conjugation;
}
