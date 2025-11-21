import { BaseVerb } from './BaseVerb';
import { type Conjugation, type Term } from './Conjugation';
import type { Verb } from './Verb.ts';
import { gFirstTerm } from './FirstTermSpecialVerb.ts';
import { happyRoot } from './HappyVerb.ts';
import { soAndSoRoot } from './SoAndSoVerb.ts';

export class YxxooxVerb extends BaseVerb {
  private readonly firstTermBuilder: (root: string) => Term;
  private readonly modifiedRootBuilder: (root: string) => Term;

  constructor(
    infinitive: string,
    translation: string,
    firstTermBuilder: (root: string) => Term,
    modifiedRootBuilder: (root: string) => Term
  ) {
    super(infinitive, translation);
    this.firstTermBuilder = firstTermBuilder;
    this.modifiedRootBuilder = modifiedRootBuilder;
  }

  get conjugation(): Conjugation {
    const root: Term = [{ type: 'root', value: this.root }];

    const modifiedRoot = this.modifiedRootBuilder(this.root);

    const firstTerm: Term = this.firstTermBuilder(this.root);

    return [
      firstTerm,
      [...modifiedRoot, this.getEnding(1)],
      [...modifiedRoot, this.getEnding(2)],
      [...root, this.getEnding(3)],
      [...root, this.getEnding(4)],
      [...modifiedRoot, this.getEnding(5)],
    ];
  }

  get emoji(): string {
    return '2️⃣';
  }
}

const digoBuilder = () =>
  [
    { type: 'root', value: 'd' },
    { type: 'alternateRoot', value: 'ec => i' },
    { type: 'alternateEnding', value: 'go' },
  ] as Term;

const oigoBuilder = () =>
  [
    { type: 'alternateRoot', value: 'o => oi' },
    { type: 'alternateEnding', value: 'go' },
  ] as Term;

const oyBuilder = () => [{ type: 'alternateRoot', value: 'o => oy' }] as Term;

export const twoIrregularitiesVerbs: Verb[] = [
  new YxxooxVerb('venir', 'venire', gFirstTerm, happyRoot),
  new YxxooxVerb('tener', 'avere', gFirstTerm, happyRoot),
  new YxxooxVerb('decir', 'dire', digoBuilder, soAndSoRoot),
  new YxxooxVerb('oír', 'udire', oigoBuilder, oyBuilder),
];
