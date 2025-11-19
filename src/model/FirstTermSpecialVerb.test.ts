import { describe, it, expect } from 'vitest';
import { FirstTermSpecialVerb } from './FirstTermSpecialVerb';

describe('FirstTermSpecialVerb', () => {
  it('conjugates regularly for other persons', () => {
    const verb = new FirstTermSpecialVerb('estar', 'essere/stare', [
      { type: 'root', value: 'est' },
      { type: 'alternateEnding', value: 'oy' },
    ]);

    expect(verb.emoji).toBe('1️⃣');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[1]).toEqual([
      { type: 'root', value: 'est' },
      { type: 'ending', value: 'as' },
    ]);
    expect(conjugation[2]).toEqual([
      { type: 'root', value: 'est' },
      { type: 'ending', value: 'a' },
    ]);
    expect(conjugation[3]).toEqual([
      { type: 'root', value: 'est' },
      { type: 'ending', value: 'amos' },
    ]);
    expect(conjugation[4]).toEqual([
      { type: 'root', value: 'est' },
      { type: 'ending', value: 'áis' },
    ]);
    expect(conjugation[5]).toEqual([
      { type: 'root', value: 'est' },
      { type: 'ending', value: 'an' },
    ]);
  });

  it('conjugates estar correctly', () => {
    const verb = new FirstTermSpecialVerb('estar', 'essere/stare', [
      { type: 'root', value: 'est' },
      { type: 'alternateEnding', value: 'oy' },
    ]);

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual([
      { type: 'root', value: 'est' },
      { type: 'alternateEnding', value: 'oy' },
    ]);
  });
});
