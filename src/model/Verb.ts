import { type Conjugation } from './Conjugation';

export interface Verb {
  emoji: string;
  infinitive: string;
  root: string;
  translation: string;
  conjugation: Conjugation;
}
