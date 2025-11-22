import { BaseVerb } from './BaseVerb';
import { type Conjugation, type Term } from './Conjugation';
import type { Verb } from './Verb.ts';
import { gFirstTerm } from './FirstTermSpecialVerb.ts';
import { happyRoot } from './HappyVerb.ts';
import { soAndSoRoot } from './SoAndSoVerb.ts';
import { TermBuilder, termWithAltRoot, termWithRoot } from './TermBuilder.ts';

export class YxxooxVerb extends BaseVerb {
  private readonly firstTermBuilder: (root: string) => Term;
  private readonly modifiedRootBuilder: (root: string) => TermBuilder;

  constructor(
    infinitive: string,
    translation: string,
    firstTermBuilder: (root: string) => Term,
    modifiedRootBuilder: (root: string) => TermBuilder
  ) {
    super(infinitive, translation);
    this.firstTermBuilder = firstTermBuilder;
    this.modifiedRootBuilder = modifiedRootBuilder;
  }

  get conjugation(): Conjugation {
    const root: TermBuilder = termWithRoot(this.root);

    const modifiedRoot: TermBuilder = this.modifiedRootBuilder(this.root);

    const firstTerm: Term = this.firstTermBuilder(this.root);

    return [
      firstTerm,
      modifiedRoot.endWith(this.getEndSuffix(1)),
      modifiedRoot.endWith(this.getEndSuffix(2)),
      root.endWith(this.getEndSuffix(3)),
      root.endWith(this.getEndSuffix(4)),
      modifiedRoot.endWith(this.getEndSuffix(5)),
    ];
  }

  get emoji(): string {
    return '2️⃣';
  }
}

const digoBuilder = () => termWithRoot('d').addAltRoot('ec', 'i').endWithAlt('go');

const oigoBuilder = () => termWithAltRoot('o', 'oi').endWithAlt('go');

const oyBuilder = () => termWithAltRoot('o', 'oy');

export const twoIrregularitiesVerbs: Verb[] = [
  new YxxooxVerb('venir', 'venire', gFirstTerm, happyRoot),
  new YxxooxVerb('tener', 'avere', gFirstTerm, happyRoot),
  new YxxooxVerb('decir', 'dire', digoBuilder, soAndSoRoot),
  new YxxooxVerb('oír', 'udire', oigoBuilder, oyBuilder),
];
