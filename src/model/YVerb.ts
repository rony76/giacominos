import { XxxooxVerb } from './XxxooxVerb';
import { type Verb, type VerbType } from './Verb';
import { TermBuilder, termWithRoot } from './TermBuilder.ts';

export function yRoot(root: string): TermBuilder {
  return termWithRoot(root).addAltRoot('i', 'y');
}

export class YVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get verbType(): VerbType {
    return 'y';
  }

  protected createModifiedRoot(): TermBuilder {
    return yRoot(this.root);
  }
}

export const yVerbs: Verb[] = [
  ['construir', 'costruire'],
  ['incluir', 'includere'],
].map(([infinitive, translation]) => new YVerb(infinitive, translation));
