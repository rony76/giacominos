import { removeTilde, type Verb } from './Verb';
import { type Conjugation, type Token } from './Conjugation';

export abstract class BaseVerb implements Verb {
  infinitive: string;
  translation: string;
  isReflexive: boolean;

  protected root: string;
  protected conjType: string;

  constructor(infinitive: string, translation: string) {
    this.infinitive = infinitive;
    this.translation = translation;

    this.isReflexive = infinitive.endsWith('se');
    if (this.isReflexive) {
      infinitive = infinitive.slice(0, -2);
    }
    this.conjType = removeTilde(infinitive.slice(-2));
    this.root = infinitive.slice(0, -2);
  }

  abstract get emoji(): string;

  abstract get conjugation(): Conjugation;

  protected getEndSuffix(index: number): string {
    const suffixes = {
      ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
      er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
      ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
    };

    return suffixes[this.conjType as keyof typeof suffixes][index];
  }

  protected getEnding(index: number): Token {
    return { type: 'ending', value: this.getEndSuffix(index) };
  }
}
