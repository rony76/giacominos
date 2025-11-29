import { XxxooxVerb } from './XxxooxVerb';
import { type Verb, type VerbType } from './Verb';
import { TermBuilder, termWithRoot } from './TermBuilder.ts';

export class SadVerb extends XxxooxVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get verbType(): VerbType {
    return 'sad';
  }

  protected createModifiedRoot(): TermBuilder {
    const root = this.root;
    const lastUIndex = root.lastIndexOf('u');
    const lastOIndex = root.lastIndexOf('o');
    const replaceIndex = Math.max(lastUIndex, lastOIndex);
    if (replaceIndex === -1) {
      throw new Error('Cannot create modified root for sad verb without "u" or "o" in root');
    }

    return termWithRoot(root.slice(0, replaceIndex))
      .addAltRoot(root[replaceIndex], 'ue')
      .addRoot(root.slice(replaceIndex + 1));
  }
}

export const sadVerbs: Verb[] = [
  ['encontrar', 'incontrare'],
  ['jugar', 'giocare'],
  ['morir', 'morire'],
  ['poder', 'potere'],
  ['sonar', 'suonare'],
  ['soñar', 'sognare'],
  ['volar', 'volare'],
  ['volver', 'tornare'],
].map(([infinitive, translation]) => new SadVerb(infinitive, translation));
