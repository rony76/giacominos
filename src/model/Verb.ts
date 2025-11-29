import { type Conjugation } from './Conjugation';

export const verbTypes = [
  'happy',
  'sad',
  'so-and-so',
  'y',
  'one-special',
  'two-specials',
  'irregular',
  'regular',
] as const;
export type VerbType = (typeof verbTypes)[number];

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
