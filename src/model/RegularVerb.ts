import { BaseVerb } from './BaseVerb';

export class RegularVerb extends BaseVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get root(): string {
    return this.infinitive.slice(0, -2);
  }

  get conjugation(): string[] {
    const ending = this.infinitive.slice(-2);
    const root = this.root;
    return [
      root + 'o',
      root + (ending === 'ar' ? 'as' : 'es'),
      root + (ending === 'ar' ? 'a' : 'e'),
      root + (ending === 'ar' ? 'amos' : ending === 'er' ? 'emos' : 'imos'),
      root + (ending === 'ar' ? 'áis' : ending === 'er' ? 'éis' : 'ís'),
      root + (ending === 'ar' ? 'an' : 'en'),
    ];
  }
}

const regularVerbs: Verb[] = [
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

export { regularVerbs };
