import { type Verb } from './Verb';
import { type Conjugation, type Token } from './Conjugation';

export abstract class BaseVerb implements Verb {
  infinitive: string;
  translation: string;

  constructor(infinitive: string, translation: string) {
    this.infinitive = infinitive;
    this.translation = translation;
  }

  get root(): string {
    return this.infinitive.slice(0, -2);
  }
  abstract get emoji(): string;

  abstract get conjugation(): Conjugation;

  protected getEnding(index: number, conjType: string): Token {
    const endings = {
      ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
      er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
      ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
    };

    return { type: 'ending', value: endings[conjType as keyof typeof endings][index] };
  }
}
