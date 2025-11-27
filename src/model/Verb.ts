import { type Conjugation } from './Conjugation';

export type VerbType =
  | 'regular'
  | 'happy'
  | 'sad'
  | 'so-and-so'
  | 'one-special'
  | 'two-specials'
  | 'y'
  | 'irregular';

export interface Verb {
  verbType: VerbType;
  infinitive: string;
  translation: string;
  isReflexive: boolean;
  conjugation: Conjugation;
}

export function removeTilde(s: string) {
  return s.replace('í', 'i').replace('é', 'e').replace('á', 'a');
}
