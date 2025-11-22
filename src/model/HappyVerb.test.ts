import { describe, it, expect } from 'vitest';
import { HappyVerb } from './HappyVerb';
import { termWithRoot } from './Conjugation.ts';

describe('HappyVerb', () => {
  it('conjugates regularly for nosotros and vosotros', () => {
    const verb = new HappyVerb('temblar', 'tremare');

    expect(verb.emoji).toBe('😊');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[3]).toEqual(termWithRoot('tembl').endWith('amos'));
    expect(conjugation[4]).toEqual(termWithRoot('tembl').endWith('áis'));
  });

  describe('AR verbs', () => {
    it('conjugates temblar correctly', () => {
      const verb = new HappyVerb('temblar', 'tremare');

      expect(verb.emoji).toBe('😊');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual(
        termWithRoot('t').addAltRoot('e', 'ie').addRoot('mbl').endWith('o')
      );
      expect(conjugation[1]).toEqual(
        termWithRoot('t').addAltRoot('e', 'ie').addRoot('mbl').endWith('as')
      );
      expect(conjugation[2]).toEqual(
        termWithRoot('t').addAltRoot('e', 'ie').addRoot('mbl').endWith('a')
      );
      expect(conjugation[5]).toEqual(
        termWithRoot('t').addAltRoot('e', 'ie').addRoot('mbl').endWith('an')
      );
    });
  });

  describe('IR verbs', () => {
    it('conjugates sentir correctly', () => {
      const verb = new HappyVerb('sentir', 'sentire');

      expect(verb.infinitive).toBe('sentir');
      expect(verb.translation).toBe('sentire');
      expect(verb.emoji).toBe('😊');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual(
        termWithRoot('s').addAltRoot('e', 'ie').addRoot('nt').endWith('o')
      );
      expect(conjugation[1]).toEqual(
        termWithRoot('s').addAltRoot('e', 'ie').addRoot('nt').endWith('es')
      );
      expect(conjugation[2]).toEqual(
        termWithRoot('s').addAltRoot('e', 'ie').addRoot('nt').endWith('e')
      );
      expect(conjugation[5]).toEqual(
        termWithRoot('s').addAltRoot('e', 'ie').addRoot('nt').endWith('en')
      );
    });

    it('conjugates arrepentirse correctly', () => {
      const verb = new HappyVerb('arrepentirse', 'pentirsi');

      expect(verb.emoji).toBe('😊');
      expect(verb.isReflexive).toBe(true);

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual(
        termWithRoot('arrep').addAltRoot('e', 'ie').addRoot('nt').endWith('o')
      );
      expect(conjugation[1]).toEqual(
        termWithRoot('arrep').addAltRoot('e', 'ie').addRoot('nt').endWith('es')
      );
      expect(conjugation[2]).toEqual(
        termWithRoot('arrep').addAltRoot('e', 'ie').addRoot('nt').endWith('e')
      );
      expect(conjugation[5]).toEqual(
        termWithRoot('arrep').addAltRoot('e', 'ie').addRoot('nt').endWith('en')
      );
    });
  });
});
