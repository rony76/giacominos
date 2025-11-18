import { describe, it, expect } from 'vitest';
import { RegularVerb } from './RegularVerb';

describe('RegularVerb', () => {
  describe('AR verbs', () => {
    it('conjugates hablar correctly', () => {
      const verb = new RegularVerb('hablar', 'to speak');

      expect(verb.infinitive).toBe('hablar');
      expect(verb.translation).toBe('to speak');
      expect(verb.emoji).toBe('✅');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual([
        { type: 'root', value: 'habl' },
        { type: 'ending', value: 'o' },
      ]);
      expect(conjugation[1]).toEqual([
        { type: 'root', value: 'habl' },
        { type: 'ending', value: 'as' },
      ]);
      expect(conjugation[2]).toEqual([
        { type: 'root', value: 'habl' },
        { type: 'ending', value: 'a' },
      ]);
      expect(conjugation[3]).toEqual([
        { type: 'root', value: 'habl' },
        { type: 'ending', value: 'amos' },
      ]);
      expect(conjugation[4]).toEqual([
        { type: 'root', value: 'habl' },
        { type: 'ending', value: 'áis' },
      ]);
      expect(conjugation[5]).toEqual([
        { type: 'root', value: 'habl' },
        { type: 'ending', value: 'an' },
      ]);
    });
  });

  describe('ER verbs', () => {
    it('conjugates comer correctly', () => {
      const verb = new RegularVerb('comer', 'to eat');

      expect(verb.infinitive).toBe('comer');
      expect(verb.translation).toBe('to eat');
      expect(verb.root).toBe('com');
      expect(verb.emoji).toBe('✅');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual([
        { type: 'root', value: 'com' },
        { type: 'ending', value: 'o' },
      ]);
      expect(conjugation[1]).toEqual([
        { type: 'root', value: 'com' },
        { type: 'ending', value: 'es' },
      ]);
      expect(conjugation[2]).toEqual([
        { type: 'root', value: 'com' },
        { type: 'ending', value: 'e' },
      ]);
      expect(conjugation[3]).toEqual([
        { type: 'root', value: 'com' },
        { type: 'ending', value: 'emos' },
      ]);
      expect(conjugation[4]).toEqual([
        { type: 'root', value: 'com' },
        { type: 'ending', value: 'éis' },
      ]);
      expect(conjugation[5]).toEqual([
        { type: 'root', value: 'com' },
        { type: 'ending', value: 'en' },
      ]);
    });
  });

  describe('IR verbs', () => {
    it('conjugates vivir correctly', () => {
      const verb = new RegularVerb('vivir', 'to live');

      expect(verb.infinitive).toBe('vivir');
      expect(verb.translation).toBe('to live');
      expect(verb.root).toBe('viv');
      expect(verb.emoji).toBe('✅');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual([
        { type: 'root', value: 'viv' },
        { type: 'ending', value: 'o' },
      ]);
      expect(conjugation[1]).toEqual([
        { type: 'root', value: 'viv' },
        { type: 'ending', value: 'es' },
      ]);
      expect(conjugation[2]).toEqual([
        { type: 'root', value: 'viv' },
        { type: 'ending', value: 'e' },
      ]);
      expect(conjugation[3]).toEqual([
        { type: 'root', value: 'viv' },
        { type: 'ending', value: 'imos' },
      ]);
      expect(conjugation[4]).toEqual([
        { type: 'root', value: 'viv' },
        { type: 'ending', value: 'ís' },
      ]);
      expect(conjugation[5]).toEqual([
        { type: 'root', value: 'viv' },
        { type: 'ending', value: 'en' },
      ]);
    });
  });
});
