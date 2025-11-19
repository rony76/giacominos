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

function oyVerb(infinitive: string, translation: string): Verb {
  const subRoot = infinitive.slice(0, -2);
  const firstTerm: Term = [
    { type: 'root', value: subRoot },
    { type: 'alternateEnding', value: 'oy' },
  ];
  return new FirstTermSpecialVerb(infinitive, translation, firstTerm);
}

function cerCirVerb(infinitive: string, translation: string): Verb {
  const subRoot = infinitive.slice(0, -3);
  const firstTerm: Term = [
    { type: 'root', value: subRoot },
    { type: 'alternateRoot', value: 'c => zc' },
    { type: 'ending', value: 'o' },
  ];
  return new FirstTermSpecialVerb(infinitive, translation, firstTerm);
}

function gVerb(infinitive: string, translation: string): Verb {
  const subRoot = infinitive.slice(0, -2);
  const firstTerm: Term = [
    { type: 'root', value: subRoot },
    { type: 'alternateEnding', value: 'go' },
  ];
  return new FirstTermSpecialVerb(infinitive, translation, firstTerm);
}

function igVerb(infinitive: string, translation: string): Verb {
  const subRoot = infinitive.slice(0, -2);
  const firstTerm: Term = [
    { type: 'root', value: subRoot },
    { type: 'alternateEnding', value: 'igo' },
  ];
  return new FirstTermSpecialVerb(infinitive, translation, firstTerm);
}

function firstSpecialVerb(infinitive: string, translation: string, specialFirstPerson: string): Verb {
  const firstTerm: Term = [
    { type: 'alternateEnding', value: specialFirstPerson },
  ];
  return new FirstTermSpecialVerb(infinitive, translation, firstTerm);
}

export const firstTermSpecialVerbs: Verb[] = [
  oyVerb('estar', 'essere/stare'),
  oyVerb('dar', 'dare'),
  cerCirVerb('crecer', 'crescere'),
  cerCirVerb('nacer', 'nascere'),
  cerCirVerb('parecer', 'sembrare'),
  gVerb('salir', 'uscire'),
  gVerb('poner', 'mettere'),
  gVerb('valer', 'valere'),
  igVerb('traer', 'prendere'),
  igVerb('caer', 'cadere'),
  new FirstTermSpecialVerb('ver', 'vedere', [
    { type: 'alternateRoot', value: 'v => ve' },
    { type: 'ending', value: 'o' },
  ]),
  firstSpecialVerb('saber', 'sapere', 'sé'),
  new FirstTermSpecialVerb('caber', 'fittare', [
    { type: 'alternateRoot', value: 'cab => quep' },
    { type: 'ending', value: 'o' },
  ]),
  new FirstTermSpecialVerb('hacer', 'fare', [
    { type: 'root', value: 'ha' },
    { type: 'alternateRoot', value: 'c => g' },
    { type: 'ending', value: 'o' },
  ]),
];
