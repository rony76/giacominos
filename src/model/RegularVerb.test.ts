import { describe, it, expect } from 'vitest';
import { RegularVerb } from './RegularVerb';
import { termWithRoot } from './Conjugation';

describe('RegularVerb', () => {
  describe('AR verbs', () => {
    it('conjugates hablar correctly', () => {
      const verb = new RegularVerb('hablar', 'to speak');

      expect(verb.infinitive).toBe('hablar');
      expect(verb.translation).toBe('to speak');
      expect(verb.emoji).toBe('✅');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual(termWithRoot('habl').endWith('o'));
      expect(conjugation[1]).toEqual(termWithRoot('habl').endWith('as'));
      expect(conjugation[2]).toEqual(termWithRoot('habl').endWith('a'));
      expect(conjugation[3]).toEqual(termWithRoot('habl').endWith('amos'));
      expect(conjugation[4]).toEqual(termWithRoot('habl').endWith('áis'));
      expect(conjugation[5]).toEqual(termWithRoot('habl').endWith('an'));
    });
  });

  describe('ER verbs', () => {
    it('conjugates comer correctly', () => {
      const verb = new RegularVerb('comer', 'to eat');

      expect(verb.emoji).toBe('✅');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual(termWithRoot('com').endWith('o'));
      expect(conjugation[1]).toEqual(termWithRoot('com').endWith('es'));
      expect(conjugation[2]).toEqual(termWithRoot('com').endWith('e'));
      expect(conjugation[3]).toEqual(termWithRoot('com').endWith('emos'));
      expect(conjugation[4]).toEqual(termWithRoot('com').endWith('éis'));
      expect(conjugation[5]).toEqual(termWithRoot('com').endWith('en'));
    });
  });

  describe('IR verbs', () => {
    it('conjugates vivir correctly', () => {
      const verb = new RegularVerb('vivir', 'to live');

      expect(verb.emoji).toBe('✅');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual(termWithRoot('viv').endWith('o'));
      expect(conjugation[1]).toEqual(termWithRoot('viv').endWith('es'));
      expect(conjugation[2]).toEqual(termWithRoot('viv').endWith('e'));
      expect(conjugation[3]).toEqual(termWithRoot('viv').endWith('imos'));
      expect(conjugation[4]).toEqual(termWithRoot('viv').endWith('ís'));
      expect(conjugation[5]).toEqual(termWithRoot('viv').endWith('en'));
    });
  });
});
