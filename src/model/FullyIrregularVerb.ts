import type { Verb } from './Verb.ts';
import { fullIrregularTerm, termWithRoot } from './TermBuilder.ts';

const emoji = '🤪';
const ser: Verb = {
  emoji: emoji,
  infinitive: 'ser',
  translation: 'essere',
  isReflexive: false,
  conjugation: [
    termWithRoot('s').endWithAlt('oy'),
    fullIrregularTerm('eres'),
    fullIrregularTerm('es'),
    termWithRoot('s').endWithAlt('omos'),
    termWithRoot('s').endWithAlt('ois'),
    termWithRoot('s').endWithAlt('on'),
  ],
};
const ir: Verb = {
  emoji: emoji,
  infinitive: 'ir',
  translation: 'andare',
  isReflexive: false,
  conjugation: [
    fullIrregularTerm('voy'),
    fullIrregularTerm('vas'),
    fullIrregularTerm('va'),
    fullIrregularTerm('vamos'),
    fullIrregularTerm('vais'),
    fullIrregularTerm('van'),
  ],
};

export const fullyIrregularVerbs: Verb[] = [ser, ir];
