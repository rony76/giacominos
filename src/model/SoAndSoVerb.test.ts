import { describe, it, expect } from 'vitest';
import { SoAndSoVerb } from './SoAndSoVerb';
import { termWithRoot } from './Conjugation.ts';

describe('SoAndSoVerb', () => {
  it('conjugates regularly for nosotros and vosotros', () => {
    const verb = new SoAndSoVerb('pedir', 'chiedere');

    expect(verb.emoji).toBe('😐');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[3]).toEqual(termWithRoot('ped').endWith('imos'));
    expect(conjugation[4]).toEqual(termWithRoot('ped').endWith('ís'));
  });

  describe('IR verbs', () => {
    it('conjugates pedir correctly', () => {
      const verb = new SoAndSoVerb('pedir', 'chiedere');

      expect(verb.emoji).toBe('😐');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual(
        termWithRoot('p').addAltRoot('e', 'i').addRoot('d').endWith('o')
      );
      expect(conjugation[1]).toEqual(
        termWithRoot('p').addAltRoot('e', 'i').addRoot('d').endWith('es')
      );
      expect(conjugation[2]).toEqual(
        termWithRoot('p').addAltRoot('e', 'i').addRoot('d').endWith('e')
      );
      expect(conjugation[5]).toEqual(
        termWithRoot('p').addAltRoot('e', 'i').addRoot('d').endWith('en')
      );
    });
  });
});
