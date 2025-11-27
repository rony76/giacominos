import { XxxooxVerb } from './XxxooxVerb';
import { type Verb, type VerbType } from './Verb';
import { TermBuilder, termWithRoot } from './TermBuilder.ts';

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

  get verbType(): VerbType {
    return 'so-and-so';
  }

  protected createModifiedRoot(): TermBuilder {
    return soAndSoRoot(this.root);
  }
}

const elegir: Verb = {
  infinitive: 'elegir',
  translation: 'scegliere',
  isReflexive: false,
  verbType: 'so-and-so',
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
  verbType: 'so-and-so',
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
