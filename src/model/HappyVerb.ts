import { type Conjugation, type Term } from './Conjugation';
import { BaseVerb } from './BaseVerb';

export class HappyVerb extends BaseVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get emoji(): string {
    return '😊';
  }

  get conjugation(): Conjugation {
    const root: Term = [{ type: 'root', value: this.root }];

    const modifiedRoot = this.createModifiedRoot(this.root);

    return [
      [...modifiedRoot, this.getEnding(0)],
      [...modifiedRoot, this.getEnding(1)],
      [...modifiedRoot, this.getEnding(2)],
      [...root, this.getEnding(3)],
      [...root, this.getEnding(4)],
      [...modifiedRoot, this.getEnding(5)],
    ];
  }

  private createModifiedRoot(root: string): Term {
    const lastEIndex = root.lastIndexOf('e');
    if (lastEIndex === -1) {
      return [{ type: 'root', value: root }];
    }

    return [
      { type: 'root', value: root.slice(0, lastEIndex) },
      { type: 'alternateRoot', value: 'ie' },
      { type: 'root', value: root.slice(lastEIndex + 1) },
    ];
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
