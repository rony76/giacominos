import { type Term } from './Conjugation';
import { XxxooxVerb } from './XxxooxVerb';
import { type Verb } from './Verb';

export class YVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get emoji(): string {
    return 'Ⓨ';
  }

  protected createModifiedRoot(root: string): Term {
    return [
      { type: 'root', value: root },
      { type: 'alternateRoot', value: 'y' },
    ];
  }
}

export const yVerbs: Verb[] = [['construir', 'costruire']].map(
  ([infinitive, translation]) => new YVerb(infinitive, translation)
);
