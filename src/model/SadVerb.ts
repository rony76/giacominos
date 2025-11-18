import { type Term } from './Conjugation';
import { XxxooxVerb } from './XxxooxVerb';
import { type Verb } from './Verb';

export class SadVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get emoji(): string {
    return '😢';
  }

  protected createModifiedRoot(root: string): Term {
    const lastUIndex = root.lastIndexOf('u');
    const lastOIndex = root.lastIndexOf('o');
    const replaceIndex = Math.max(lastUIndex, lastOIndex);
    if (replaceIndex === -1) {
      return [{ type: 'root', value: root }];
    }

    return [
      { type: 'root', value: root.slice(0, replaceIndex) },
      { type: 'alternateRoot', value: 'ue' },
      { type: 'root', value: root.slice(replaceIndex + 1) },
    ];
  }
}

export const sadVerbs: Verb[] = [
  ['jugar', 'giocare'],
  ['morir', 'morire'],
  ['sonar', 'suonare'],
  ['volver', 'tornare'],
].map(([infinitive, translation]) => new SadVerb(infinitive, translation));
