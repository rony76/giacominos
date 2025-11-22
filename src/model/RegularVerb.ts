import { type Verb } from './Verb';
import { type Conjugation } from './Conjugation';
import { BaseVerb } from './BaseVerb';
import { termWithRoot } from './TermBuilder.ts';

export class RegularVerb extends BaseVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get emoji(): string {
    return '✅';
  }

  get conjugation(): Conjugation {
    const root = termWithRoot(this.root);

    return [0, 1, 2, 3, 4, 5].map((i) => root.endWith(this.getEndSuffix(i)));
  }
}

export const regularVerbs: Verb[] = [
  ['pasear', 'passeggiare'],
  ['decidir', 'decidere'],
  ['pagar', 'pagare'],
  ['comprender', 'capire'],
  ['mirar', 'guardare'],
  ['vender', 'vendere'],
  ['comprar', 'comprare'],
  ['esperar', 'aspettare'],
  ['regalar', 'regalare'],
  ['creer', 'credere'],
  ['enseñar', 'insegnare'],
  ['ayudar', 'aiutare'],
  ['usar', 'usare'],
  ['caminar', 'camminare'],
  ['romper', 'rompere'],
  ['montar', 'montare'],
  ['enviar', 'inviare'],
  ['terminar', 'terminare'],
  ['comer', 'mangiare'],
  ['hablar', 'parlare'],
  ['vivir', 'vivere'],
].map(([infinitive, translation]) => new RegularVerb(infinitive, translation));
