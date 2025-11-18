import { type Conjugation } from './Conjugation';

export interface Verb {
  infinitive: string;
  root: string;
  translation: string;
  conjugation: Conjugation;
}
