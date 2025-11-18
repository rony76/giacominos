import { type Verb } from './Verb';
import { type Conjugation, type Term, type Token } from './Conjugation';
import { BaseVerb } from './BaseVerb';

export class RegularVerb extends BaseVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get root(): string {
    return this.infinitive.slice(0, -2);
  }

  get emoji(): string {
    return '✅';
  }

  get conjugation(): Conjugation {
    const root: Token = { type: 'root', value: this.root };

    return [0, 1, 2, 3, 4, 5].map((i) => [root, this.getEnding(i)] as Term);
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
