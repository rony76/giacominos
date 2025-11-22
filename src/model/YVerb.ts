import { termWithRoot, type TermBuilder } from './Conjugation';
import { XxxooxVerb } from './XxxooxVerb';
import { type Verb } from './Verb';

export function yRoot(root: string): TermBuilder {
  return termWithRoot(root).addAltRoot('i', 'y');
}

export class YVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get emoji(): string {
    return 'Ⓨ';
  }

  protected createModifiedRoot(): TermBuilder {
    return yRoot(this.root);
  }
}

export const yVerbs: Verb[] = [['construir', 'costruire']].map(
  ([infinitive, translation]) => new YVerb(infinitive, translation)
);
