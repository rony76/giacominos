import { termWithRoot, TermBuilder } from './Conjugation';
import { XxxooxVerb } from './XxxooxVerb';
import { type Verb } from './Verb';

export function happyRoot(root: string): TermBuilder {
  const lastEIndex = root.lastIndexOf('e');
  if (lastEIndex === -1) {
    throw new Error('Cannot create modified root for happy verb without "e" in root');
  }

  return termWithRoot(root.slice(0, lastEIndex))
    .addAltRoot('e', 'ie')
    .addRoot(root.slice(lastEIndex + 1));
}

export class HappyVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get emoji(): string {
    return '😊';
  }

  protected createModifiedRoot(): TermBuilder {
    return happyRoot(this.root);
  }
}

export const happyVerbs: Verb[] = [
  ['temblar', 'tremare'],
  ['querer', 'desiderare'],
  ['perder', 'perdere'],
  ['arrepentirse', 'pentirsi'],
  ['sentir', 'sentire'],
  ['mentir', 'mentire'],
  ['preferir', 'preferire'],
  ['cerrar', 'chiudere'],
].map(([infinitive, translation]) => new HappyVerb(infinitive, translation));
