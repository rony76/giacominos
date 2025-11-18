import { type Verb } from './Verb';

export abstract class BaseVerb implements Verb {
  infinitive: string;
  translation: string;

  constructor(infinitive: string, translation: string) {
    this.infinitive = infinitive;
    this.translation = translation;
  }

  abstract get root(): string;
}
