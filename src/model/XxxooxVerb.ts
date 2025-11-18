import { BaseVerb } from './BaseVerb';
import { type Conjugation, type Term } from './Conjugation';

export abstract class XxxooxVerb extends BaseVerb {
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

  protected abstract createModifiedRoot(root: string): Term;
}
