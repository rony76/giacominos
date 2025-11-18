import { describe, it, expect } from 'vitest';
import { SoAndSoVerb } from './SoAndSoVerb';

describe('SoAndSoVerb', () => {
  it('conjugates regularly for nosotros and vosotros', () => {
    const verb = new SoAndSoVerb('pedir', 'chiedere');

    expect(verb.emoji).toBe('😐');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[3]).toEqual([
      { type: 'root', value: 'ped' },
      { type: 'ending', value: 'imos' },
    ]);
    expect(conjugation[4]).toEqual([
      { type: 'root', value: 'ped' },
      { type: 'ending', value: 'ís' },
    ]);
  });

  describe('IR verbs', () => {
    it('conjugates pedir correctly', () => {
      const verb = new SoAndSoVerb('pedir', 'chiedere');

      expect(verb.emoji).toBe('😐');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual([
        { type: 'root', value: 'p' },
        { type: 'alternateRoot', value: 'i' },
        { type: 'root', value: 'd' },
        { type: 'ending', value: 'o' },
      ]);
      expect(conjugation[1]).toEqual([
        { type: 'root', value: 'p' },
        { type: 'alternateRoot', value: 'i' },
        { type: 'root', value: 'd' },
        { type: 'ending', value: 'es' },
      ]);
      expect(conjugation[2]).toEqual([
        { type: 'root', value: 'p' },
        { type: 'alternateRoot', value: 'i' },
        { type: 'root', value: 'd' },
        { type: 'ending', value: 'e' },
      ]);
      expect(conjugation[5]).toEqual([
        { type: 'root', value: 'p' },
        { type: 'alternateRoot', value: 'i' },
        { type: 'root', value: 'd' },
        { type: 'ending', value: 'en' },
      ]);
    });
  });
});
