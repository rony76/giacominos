import { type Verb } from './Verb';
import { regularVerbs } from './RegularVerb';
import { happyVerbs } from './HappyVerb';
import { sadVerbs } from './SadVerb';
import { soAndSoVerbs } from './SoAndSoVerb';
import { yVerbs } from './YVerb';
import { firstTermSpecialVerbs } from './FirstTermSpecialVerb';
import { twoIrregularitiesVerbs } from './TwoIrregularitiesVerb.ts';
import { fullyIrregularVerbs } from './FullyIrregularVerb.ts';

export const allVerbs: Verb[] = [
  ...regularVerbs,
  ...happyVerbs,
  ...sadVerbs,
  ...soAndSoVerbs,
  ...yVerbs,
  ...firstTermSpecialVerbs,
  ...twoIrregularitiesVerbs,
  ...fullyIrregularVerbs,
].sort((a, b) => a.infinitive.localeCompare(b.infinitive));
