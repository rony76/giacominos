import { describe, it, expect } from 'vitest';
import { YVerb } from './YVerb';

describe('YVerb', () => {
  it('conjugates regularly for nosotros and vosotros', () => {
    const verb = new YVerb('construir', 'costruire');

    expect(verb.emoji).toBe('Ⓨ');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[3]).toEqual([
      { type: 'root', value: 'constru' },
      { type: 'ending', value: 'imos' },
    ]);
    expect(conjugation[4]).toEqual([
      { type: 'root', value: 'constru' },
      { type: 'ending', value: 'ís' },
    ]);
  });

  describe('AR verbs', () => {
    it('conjugates construir correctly (turning I into Y)', () => {
      const verb = new YVerb('construir', 'costruire');

      expect(verb.emoji).toBe('Ⓨ');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual([
        { type: 'root', value: 'constru' },
        { type: 'alternateRoot', value: 'y' },
        { type: 'ending', value: 'o' },
      ]);
      expect(conjugation[1]).toEqual([
        { type: 'root', value: 'constru' },
        { type: 'alternateRoot', value: 'y' },
        { type: 'ending', value: 'es' },
      ]);
      expect(conjugation[2]).toEqual([
        { type: 'root', value: 'constru' },
        { type: 'alternateRoot', value: 'y' },
        { type: 'ending', value: 'e' },
      ]);
      expect(conjugation[5]).toEqual([
        { type: 'root', value: 'constru' },
        { type: 'alternateRoot', value: 'y' },
        { type: 'ending', value: 'en' },
      ]);
    });
  });
});
