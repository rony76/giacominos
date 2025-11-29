import { XxxooxVerb } from './XxxooxVerb';
import { type Verb, type VerbType } from './Verb';
import { TermBuilder, termWithRoot } from './TermBuilder.ts';

export function happyRoot(root: string): TermBuilder {
  const lastEIndex = root.lastIndexOf('e');
  if (lastEIndex === -1) {
    throw new Error(
      'Cannot create modified root for happy verb "' + root + '" without "e" in root'
    );
  }

  return termWithRoot(root.slice(0, lastEIndex))
    .addAltRoot('e', 'ie')
    .addRoot(root.slice(lastEIndex + 1));
}

export class HappyVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get verbType(): VerbType {
    return 'happy';
  }

  protected createModifiedRoot(): TermBuilder {
    return happyRoot(this.root);
  }
}

export const happyVerbs: Verb[] = [
  ['arrepentirse', 'pentirsi'],
  ['cerrar', 'chiudere'],
  ['comenzar', 'cominciare'],
  ['divertirse', 'divertirsi'],
  ['encender', 'accendere'],
  ['mentir', 'mentire'],
  ['pensar', 'pensare'],
  ['perder', 'perdere'],
  ['preferir', 'preferire'],
  ['querer', 'desiderare'],
  ['sentir', 'sentire'],
  ['temblar', 'tremare'],
].map(([infinitive, translation]) => new HappyVerb(infinitive, translation));
