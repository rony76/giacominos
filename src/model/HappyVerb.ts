import { type Term } from './Conjugation';
import { XxxooxVerb } from './XxxooxVerb';
import { type Verb } from './Verb';

export function happyRoot(root: string): Term {
  const lastEIndex = root.lastIndexOf('e');
  if (lastEIndex === -1) {
    return [{ type: 'root', value: root }];
  }

  return [
    { type: 'root', value: root.slice(0, lastEIndex) },
    { type: 'alternateRoot', value: 'e => ie' },
    { type: 'root', value: root.slice(lastEIndex + 1) },
  ];
}

export class HappyVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get emoji(): string {
    return '😊';
  }

  protected createModifiedRoot(): Term {
    return happyRoot(this.root);
  }
}

export const happyVerbs: Verb[] = [
  ['temblar', 'tremare'],
  ['querer', 'desiderare'],
  ['perder', 'perdere'],
  ['sentir', 'sentire'],
  ['mentir', 'mentire'],
  ['preferir', 'preferire'],
].map(([infinitive, translation]) => new HappyVerb(infinitive, translation));
