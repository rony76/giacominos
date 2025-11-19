import { describe, it, expect } from 'vitest';
import { HappyVerb } from './HappyVerb';

describe('HappyVerb', () => {
  it('conjugates regularly for nosotros and vosotros', () => {
    const verb = new HappyVerb('temblar', 'tremare');

    expect(verb.infinitive).toBe('temblar');
    expect(verb.translation).toBe('tremare');
    expect(verb.emoji).toBe('😊');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[3]).toEqual([
      { type: 'root', value: 'tembl' },
      { type: 'ending', value: 'amos' },
    ]);
    expect(conjugation[4]).toEqual([
      { type: 'root', value: 'tembl' },
      { type: 'ending', value: 'áis' },
    ]);
  });

  describe('AR verbs', () => {
    it('conjugates temblar correctly', () => {
      const verb = new HappyVerb('temblar', 'tremare');

      expect(verb.infinitive).toBe('temblar');
      expect(verb.translation).toBe('tremare');
      expect(verb.emoji).toBe('😊');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual([
        { type: 'root', value: 't' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'mbl' },
        { type: 'ending', value: 'o' },
      ]);
      expect(conjugation[1]).toEqual([
        { type: 'root', value: 't' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'mbl' },
        { type: 'ending', value: 'as' },
      ]);
      expect(conjugation[2]).toEqual([
        { type: 'root', value: 't' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'mbl' },
        { type: 'ending', value: 'a' },
      ]);
      expect(conjugation[5]).toEqual([
        { type: 'root', value: 't' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'mbl' },
        { type: 'ending', value: 'an' },
      ]);
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

      expect(conjugation[0]).toEqual([
        { type: 'root', value: 's' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'nt' },
        { type: 'ending', value: 'o' },
      ]);
      expect(conjugation[1]).toEqual([
        { type: 'root', value: 's' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'nt' },
        { type: 'ending', value: 'es' },
      ]);
      expect(conjugation[2]).toEqual([
        { type: 'root', value: 's' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'nt' },
        { type: 'ending', value: 'e' },
      ]);
      expect(conjugation[5]).toEqual([
        { type: 'root', value: 's' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'nt' },
        { type: 'ending', value: 'en' },
      ]);
    });

    it('conjugates arrepentirse correctly', () => {
      const verb = new HappyVerb('arrepentirse', 'pentirsi');

      expect(verb.emoji).toBe('😊');
      expect(verb.isReflexive).toBe(true);

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual([
        { type: 'root', value: 'arrep' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'nt' },
        { type: 'ending', value: 'o' },
      ]);
      expect(conjugation[1]).toEqual([
        { type: 'root', value: 'arrep' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'nt' },
        { type: 'ending', value: 'es' },
      ]);
      expect(conjugation[2]).toEqual([
        { type: 'root', value: 'arrep' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'nt' },
        { type: 'ending', value: 'e' },
      ]);
      expect(conjugation[5]).toEqual([
        { type: 'root', value: 'arrep' },
        { type: 'alternateRoot', value: 'e => ie' },
        { type: 'root', value: 'nt' },
        { type: 'ending', value: 'en' },
      ]);
    });
  });
});
