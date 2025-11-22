import { XxxooxVerb } from './XxxooxVerb';
import { type Verb } from './Verb';
import { TermBuilder, termWithRoot } from './TermBuilder.ts';

const soAndSoEmoji = '😐';

export function soAndSoRoot(root: string): TermBuilder {
  const lastEIndex = root.lastIndexOf('e');
  if (lastEIndex === -1) {
    throw new Error('Cannot create modified root for so-and-so verb without "e" in root');
  }

  return termWithRoot(root.slice(0, lastEIndex))
    .addAltRoot('e', 'i')
    .addRoot(root.slice(lastEIndex + 1));
}

export class SoAndSoVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get emoji(): string {
    return soAndSoEmoji;
  }

  protected createModifiedRoot(): TermBuilder {
    return soAndSoRoot(this.root);
  }
}

const elegir: Verb = {
  infinitive: 'elegir',
  translation: 'scegliere',
  isReflexive: false,
  emoji: soAndSoEmoji,
  conjugation: [
    termWithRoot('el').addAltRoot('eg', 'ij').endWith('o'),
    termWithRoot('el').addAltRoot('e', 'i').addRoot('g').endWith('es'),
    termWithRoot('el').addAltRoot('e', 'i').addRoot('g').endWith('e'),
    termWithRoot('eleg').endWith('imos'),
    termWithRoot('eleg').endWith('ís'),
    termWithRoot('el').addAltRoot('e', 'i').addRoot('g').endWith('en'),
  ],
};

const seguir: Verb = {
  infinitive: 'seguir',
  translation: 'seguire',
  emoji: soAndSoEmoji,
  isReflexive: false,
  conjugation: [
    termWithRoot('s').addAltRoot('egu', 'ig').endWith('o'),
    termWithRoot('s').addAltRoot('e', 'i').addRoot('gu').endWith('es'),
    termWithRoot('s').addAltRoot('e', 'i').addRoot('gu').endWith('e'),
    termWithRoot('segu').endWith('imos'),
    termWithRoot('segu').endWith('ís'),
    termWithRoot('s').addAltRoot('e', 'i').addRoot('gu').endWith('en'),
  ],
};

const standardVerbs = [
  ['pedir', 'chiedere'],
  ['reir', 'ridere'],
].map(([infinitive, translation]) => new SoAndSoVerb(infinitive, translation));

export const soAndSoVerbs: Verb[] = [...standardVerbs, elegir, seguir];
