import { type Verb } from './Verb';
import { type Conjugation } from './Conjugation';

export abstract class BaseVerb implements Verb {
  infinitive: string;
  translation: string;

  constructor(infinitive: string, translation: string) {
    this.infinitive = infinitive;
    this.translation = translation;
  }

  abstract get conjugation(): Conjugation;

  abstract get root(): string;
}
