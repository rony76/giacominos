import { type Conjugation, type Term } from './Conjugation';
import { BaseVerb } from './BaseVerb';
import { type Verb } from './Verb';
import { termWithAltRoot, termWithRoot } from './TermBuilder.ts';

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
    const root = termWithRoot(this.root);

    return [
      this.firstTerm,
      root.endWith(this.getEndSuffix(1)),
      root.endWith(this.getEndSuffix(2)),
      root.endWith(this.getEndSuffix(3)),
      root.endWith(this.getEndSuffix(4)),
      root.endWith(this.getEndSuffix(5)),
    ];
  }
}

function oyVerb(infinitive: string, translation: string): Verb {
  const subRoot = infinitive.slice(0, -2);
  const firstTerm: Term = termWithRoot(subRoot).endWith('oy');
  return new FirstTermSpecialVerb(infinitive, translation, firstTerm);
}

function cerCirVerb(infinitive: string, translation: string): Verb {
  const subRoot = infinitive.slice(0, -3);
  const firstTerm: Term = termWithRoot(subRoot).addAltRoot('c', 'zc').endWith('o');
  return new FirstTermSpecialVerb(infinitive, translation, firstTerm);
}

export function gFirstTerm(root: string): Term {
  return termWithRoot(root).endWithAlt('go');
}

function gVerb(infinitive: string, translation: string): Verb {
  const subRoot = infinitive.slice(0, -2);
  const firstTerm = gFirstTerm(subRoot);
  return new FirstTermSpecialVerb(infinitive, translation, firstTerm);
}

function igVerb(infinitive: string, translation: string): Verb {
  const subRoot = infinitive.slice(0, -2);
  const firstTerm = termWithRoot(subRoot).endWithAlt('go');
  return new FirstTermSpecialVerb(infinitive, translation, firstTerm);
}

function firstSpecialVerb(
  infinitive: string,
  translation: string,
  specialFirstPerson: string
): Verb {
  const firstTerm: Term = [{ type: 'altEnding', value: specialFirstPerson }];
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
  new FirstTermSpecialVerb('ver', 'vedere', termWithAltRoot('v', 've').endWith('o')),
  firstSpecialVerb('saber', 'sapere', 'sé'),
  new FirstTermSpecialVerb('caber', 'fittare', termWithAltRoot('cab', 'quep').endWith('o')),
  new FirstTermSpecialVerb('hacer', 'fare', termWithRoot('ha').addAltRoot('c', 'g').endWith('o')),
];
