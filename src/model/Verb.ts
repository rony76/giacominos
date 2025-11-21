import { type Conjugation } from './Conjugation';

export interface Verb {
  emoji: string;
  infinitive: string;
  translation: string;
  isReflexive: boolean;
  conjugation: Conjugation;
}

export function removeTilde(s: string) {
  return s.replace('í', 'i').replace('é', 'e').replace('á', 'a');
}
