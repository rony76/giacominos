import { type Verb } from './Verb';
import { type Conjugation } from './Conjugation';

export abstract class BaseVerb implements Verb {
  constructor(
    public readonly infinitive: string,
    public readonly translation: string
  ) {}

  get root(): string {
    return this.infinitive.slice(0, -2);
  }
  abstract get emoji(): string;

  abstract get conjugation(): Conjugation;

  protected getEnding(index: number, conjType: string): string {
    const endings = {
      ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
      er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
      ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
    };

    return endings[conjType as keyof typeof endings][index];
  }
}
