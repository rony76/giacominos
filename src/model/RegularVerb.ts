import { type Verb, type VerbType } from './Verb';
import { type Conjugation } from './Conjugation';
import { BaseVerb } from './BaseVerb';
import { termWithRoot } from './TermBuilder.ts';

export class RegularVerb extends BaseVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get verbType(): VerbType {
    return 'regular';
  }

  get conjugation(): Conjugation {
    const root = termWithRoot(this.root);

    return [0, 1, 2, 3, 4, 5].map((i) => root.endWith(this.getEndSuffix(i)));
  }
}

export const regularVerbs: Verb[] = [
  ['abrazar', 'abbracciare'],
  ['apagar', 'spegnere'],
  ['ayudar', 'aiutare'],
  ['bezar', 'baciare'],
  ['borrar', 'cancellare'],
  ['buscar', 'cercare'],
  ['cambiar', 'cambiare'],
  ['caminar', 'camminare'],
  ['comer', 'mangiare'],
  ['comprar', 'comprare'],
  ['comprender', 'capire'],
  ['creer', 'credere'],
  ['decidir', 'decidere'],
  ['dejar', 'lasciare'],
  ['enseñar', 'insegnare'],
  ['enviar', 'inviare'],
  ['escuchar', 'ascoltare'],
  ['esperar', 'aspettare'],
  ['hablar', 'parlare'],
  ['leer', 'leggere'],
  ['llegar', 'arrivare'],
  ['llevar', 'portare'],
  ['mirar', 'guardare'],
  ['montar', 'montare'],
  ['olvidar', 'dimenticare'],
  ['pagar', 'pagare'],
  ['pasear', 'passeggiare'],
  ['regalar', 'regalare'],
  ['rellenar', 'riempire'],
  ['romper', 'rompere'],
  ['subir', 'salire'],
  ['terminar', 'terminare'],
  ['usar', 'usare'],
  ['vender', 'vendere'],
  ['vivir', 'vivere'],
].map(([infinitive, translation]) => new RegularVerb(infinitive, translation));
