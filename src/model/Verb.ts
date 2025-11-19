import { type Conjugation } from './Conjugation';

export interface Verb {
  emoji: string;
  infinitive: string;
  translation: string;
  conjugation: Conjugation;
}
