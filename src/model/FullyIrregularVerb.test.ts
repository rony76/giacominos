import { describe, expect, it } from 'vitest';
import type { Verb } from './Verb.ts';
import { fullyIrregularVerbs } from './FullyIrregularVerb.ts';
import { fullIrregularTerm, termWithRoot } from './TermBuilder.ts';

describe('Fully irregular verb', () => {
  function findVerb(inf: string): Verb {
    const verb = fullyIrregularVerbs.find((v) => v.infinitive === inf);
    expect(verb).toBeTruthy();
    if (!verb) throw new Error('Cannot find verb ' + inf);
    return verb;
  }

  it('conjugates regularly SER', () => {
    const verb = findVerb('ser');

    expect(verb.emoji).toBe('🤪');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual(termWithRoot('s').endWithAlt('oy'));
    expect(conjugation[1]).toEqual(fullIrregularTerm('eres'));
    expect(conjugation[2]).toEqual(fullIrregularTerm('es'));
    expect(conjugation[3]).toEqual(termWithRoot('s').endWithAlt('omos'));
    expect(conjugation[4]).toEqual(termWithRoot('s').endWithAlt('ois'));
    expect(conjugation[5]).toEqual(termWithRoot('s').endWithAlt('on'));
  });

  it('conjugates regularly IR', () => {
    const verb = findVerb('ir');

    expect(verb.emoji).toBe('🤪');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual(fullIrregularTerm('voy'));
    expect(conjugation[1]).toEqual(fullIrregularTerm('vas'));
    expect(conjugation[2]).toEqual(fullIrregularTerm('va'));
    expect(conjugation[3]).toEqual(fullIrregularTerm('vamos'));
    expect(conjugation[4]).toEqual(fullIrregularTerm('vais'));
    expect(conjugation[5]).toEqual(fullIrregularTerm('van'));
  });
});
