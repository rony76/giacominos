import { type Conjugation, type Term } from './Conjugation';
import { BaseVerb } from './BaseVerb';
import { type Verb } from './Verb';

export class FirstTermSpecialVerb extends BaseVerb {
  private readonly firstTerm: Term;

  constructor(infinitive: string, translation: string, firstTerm: Term) {
    super(infinitive, translation);
    this.firstTerm = firstTerm;
  }

  get emoji(): string {
    return '1️⃣';
  }

  get conjugation(): Conjugation {
    const root: Term = [{ type: 'root', value: this.root }];

    return [
      this.firstTerm,
      [...root, this.getEnding(1)],
      [...root, this.getEnding(2)],
      [...root, this.getEnding(3)],
      [...root, this.getEnding(4)],
      [...root, this.getEnding(5)],
    ];
  }
}

export const firstTermSpecialVerbs: Verb[] = [
  new FirstTermSpecialVerb('estar', 'essere/stare', [
    { type: 'root', value: 'est' },
    { type: 'alternateEnding', value: 'oy' },
  ]),
  new FirstTermSpecialVerb('dar', 'dare', [
    { type: 'root', value: 'd' },
    { type: 'alternateEnding', value: 'oy' },
  ]),
];
