import { regularVerbs } from './RegularVerb';
import { happyVerbs } from './HappyVerb';
import { sadVerbs } from './SadVerb';
import { type Verb } from './Verb';

export const allVerbs: Verb[] = [...regularVerbs, ...happyVerbs, ...sadVerbs].sort((a, b) =>
  a.infinitive.localeCompare(b.infinitive)
);
