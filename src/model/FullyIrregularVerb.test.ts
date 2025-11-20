import { describe, expect, it } from 'vitest';
import type { Verb } from './Verb.ts';
import { fullyIrregularVerbs } from './FullyIrregularVerb.ts';

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
q
  });
});
