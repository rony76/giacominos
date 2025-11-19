import { type Term } from './Conjugation';
import { XxxooxVerb } from './XxxooxVerb';
import { type Verb } from './Verb';

const soAndSoEmoji = '😐';

export function soAndSoRoot(root: string): Term {
  const lastEIndex = root.lastIndexOf('e');
  if (lastEIndex === -1) {
    return [{ type: 'root', value: root }];
  }

  return [
    { type: 'root', value: root.slice(0, lastEIndex) },
    { type: 'alternateRoot', value: 'e => i' },
    { type: 'root', value: root.slice(lastEIndex + 1) },
  ];
}

export class SoAndSoVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get emoji(): string {
    return soAndSoEmoji;
  }

  protected createModifiedRoot(): Term {
    const root = this.root;
    return soAndSoRoot(root);
  }
}

const elegir: Verb = {
  infinitive: 'elegir',
  translation: 'scegliere',
  isReflexive: false,
  emoji: soAndSoEmoji,
  conjugation: [
    [
      { type: 'root', value: 'el' },
      { type: 'alternateRoot', value: 'eg => ij' },
      { type: 'ending', value: 'o' },
    ],
    [
      { type: 'root', value: 'el' },
      { type: 'alternateRoot', value: 'e => i' },
      { type: 'root', value: 'g' },
      { type: 'ending', value: 'es' },
    ],
    [
      { type: 'root', value: 'el' },
      { type: 'alternateRoot', value: 'e => i' },
      { type: 'root', value: 'g' },
      { type: 'ending', value: 'e' },
    ],
    [
      { type: 'root', value: 'eleg' },
      { type: 'ending', value: 'imos' },
    ],
    [
      { type: 'root', value: 'eleg' },
      { type: 'ending', value: 'ís' },
    ],
    [
      { type: 'root', value: 'el' },
      { type: 'alternateRoot', value: 'e => i' },
      { type: 'root', value: 'g' },
      { type: 'ending', value: 'en' },
    ],
  ],
};
const seguir: Verb = {
  infinitive: 'seguir',
  translation: 'seguire',
  emoji: soAndSoEmoji,
  isReflexive: false,
  conjugation: [
    [
      { type: 'root', value: 's' },
      { type: 'alternateRoot', value: 'egu => ig' },
      { type: 'ending', value: 'o' },
    ],
    [
      { type: 'root', value: 's' },
      { type: 'alternateRoot', value: 'e => i' },
      { type: 'root', value: 'gu' },
      { type: 'ending', value: 'es' },
    ],
    [
      { type: 'root', value: 's' },
      { type: 'alternateRoot', value: 'e => i' },
      { type: 'root', value: 'gu' },
      { type: 'ending', value: 'e' },
    ],
    [
      { type: 'root', value: 'segu' },
      { type: 'ending', value: 'imos' },
    ],
    [
      { type: 'root', value: 'segu' },
      { type: 'ending', value: 'ís' },
    ],
    [
      { type: 'root', value: 's' },
      { type: 'alternateRoot', value: 'e => i' },
      { type: 'root', value: 'gu' },
      { type: 'ending', value: 'en' },
    ],
  ],
};

const standardVerbs = [
  ['pedir', 'chiedere'],
  ['reir', 'ridere'],
].map(([infinitive, translation]) => new SoAndSoVerb(infinitive, translation));

export const soAndSoVerbs: Verb[] = [...standardVerbs, elegir, seguir];
