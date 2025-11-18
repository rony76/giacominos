import { regularVerbs } from './RegularVerb';
import { type Verb } from './Verb';

export const allVerbs: Verb[] = [...regularVerbs].sort((a, b) =>
  a.infinitive.localeCompare(b.infinitive)
);
