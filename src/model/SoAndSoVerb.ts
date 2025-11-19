import { type Term } from './Conjugation';
import { XxxooxVerb } from './XxxooxVerb';
import { type Verb } from './Verb';

export class SoAndSoVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get emoji(): string {
    return '😐';
  }

  protected createModifiedRoot(root: string): Term {
    const lastEIndex = root.lastIndexOf('e');
    if (lastEIndex === -1) {
      return [{ type: 'root', value: root }];
    }

    return [
      { type: 'root', value: root.slice(0, lastEIndex) },
      { type: 'alternateRoot', value: 'e => i' },
      { type: 'root', value: root.slice(lastEIndex + 1) },
    ];
  }
}

export const soAndSoVerbs: Verb[] = [['pedir', 'chiedere']].map(
  ([infinitive, translation]) => new SoAndSoVerb(infinitive, translation)
);
