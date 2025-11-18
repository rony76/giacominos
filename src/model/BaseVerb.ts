import { type Verb } from './Verb';
import { type Conjugation } from './Conjugation';

export abstract class BaseVerb implements Verb {
  constructor(
    public readonly infinitive: string,
    public readonly translation: string
  ) {}

  abstract get emoji(): string;

  abstract get conjugation(): Conjugation;

  abstract get root(): string;
}
