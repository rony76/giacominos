import { regularVerbs } from './RegularVerb';
import { happyVerbs } from './HappyVerb';
import { sadVerbs } from './SadVerb';
import { soAndSoVerbs } from './SoAndSoVerb';
import { type Verb } from './Verb';

export const allVerbs: Verb[] = [...regularVerbs, ...happyVerbs, ...sadVerbs, ...soAndSoVerbs].sort(
  (a, b) => a.infinitive.localeCompare(b.infinitive)
);
