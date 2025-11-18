import { regularVerbs } from './RegularVerb';
import { happyVerbs } from './HappyVerb';
import { type Verb } from './Verb';

export const allVerbs: Verb[] = [...regularVerbs, ...happyVerbs].sort((a, b) =>
  a.infinitive.localeCompare(b.infinitive)
);
