import { BaseVerb } from './BaseVerb';
import { type Conjugation } from './Conjugation';
import { TermBuilder, termWithRoot } from './TermBuilder.ts';

export abstract class XxxooxVerb extends BaseVerb {
  get conjugation(): Conjugation {
    const root: TermBuilder = termWithRoot(this.root);

    const modifiedRoot = this.createModifiedRoot();

    return [
      modifiedRoot.endWith(this.getEndSuffix(0)),
      modifiedRoot.endWith(this.getEndSuffix(1)),
      modifiedRoot.endWith(this.getEndSuffix(2)),
      root.endWith(this.getEndSuffix(3)),
      root.endWith(this.getEndSuffix(4)),
      modifiedRoot.endWith(this.getEndSuffix(5)),
    ];
  }

  protected abstract createModifiedRoot(): TermBuilder;
}
