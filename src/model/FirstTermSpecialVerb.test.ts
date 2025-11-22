import { describe, it, expect } from 'vitest';
import { FirstTermSpecialVerb } from './FirstTermSpecialVerb';
import { termWithRoot } from './Conjugation';

describe('FirstTermSpecialVerb', () => {
  it('conjugates regularly for other persons', () => {
    const verb = new FirstTermSpecialVerb(
      'estar',
      'essere/stare',
      termWithRoot('est').endWithAlt('oy')
    );

    expect(verb.emoji).toBe('1️⃣');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    const rootBuilder = termWithRoot('est');

    expect(conjugation[1]).toEqual(rootBuilder.endWith('as'));
    expect(conjugation[2]).toEqual(rootBuilder.endWith('a'));
    expect(conjugation[3]).toEqual(rootBuilder.endWith('amos'));
    expect(conjugation[4]).toEqual(rootBuilder.endWith('áis'));
    expect(conjugation[5]).toEqual(rootBuilder.endWith('an'));
  });

  it('conjugates estar correctly', () => {
    const verb = new FirstTermSpecialVerb(
      'estar',
      'essere/stare',
      termWithRoot('est').endWithAlt('oy')
    );

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual(termWithRoot('est').endWithAlt('oy'));
  });
});
