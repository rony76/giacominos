import { type Verb } from './Verb';
import { type Conjugation, type Term } from './Conjugation';
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
    const ending = this.infinitive.slice(-2);
    const root = this.root;
    return [
      this.createTerm(root, 'o'),
      this.createTerm(root, ending === 'ar' ? 'as' : 'es'),
      this.createTerm(root, ending === 'ar' ? 'a' : 'e'),
      this.createTerm(root, ending === 'ar' ? 'amos' : ending === 'er' ? 'emos' : 'imos'),
      this.createTerm(root, ending === 'ar' ? 'áis' : ending === 'er' ? 'éis' : 'ís'),
      this.createTerm(root, ending === 'ar' ? 'an' : 'en'),
    ];
  }

  private createTerm(root: string, ending: string): Term {
    return [
      { type: 'root', value: root },
      { type: 'ending', value: ending },
    ];
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
  ['esperar ', 'aspettare'],
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
