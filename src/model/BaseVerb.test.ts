import { describe, expect, it } from 'vitest';
import { BaseVerb } from './BaseVerb';
import type { VerbType } from './Verb';
import type { Conjugation } from './Conjugation';
import { termWithRoot } from './TermBuilder';

// Test subclass to test BaseVerb functionality
class TestBaseVerb extends BaseVerb {
  get verbType(): VerbType {
    return 'regular';
  }

  get conjugation(): Conjugation {
    return [0, 1, 2, 3, 4, 5].map((i) => termWithRoot(this.root).endWith(this.getEndSuffix(i)));
  }
}

describe('BaseVerb', () => {
  describe('constructor', () => {
    it('sets infinitive and translation', () => {
      const verb = new TestBaseVerb('hablar', 'to speak');
      expect(verb.infinitive).toBe('hablar');
      expect(verb.translation).toBe('to speak');
    });

    it('handles non-reflexive verbs', () => {
      const verb = new TestBaseVerb('hablar', 'to speak');
      expect(verb.isReflexive).toBe(false);
    });

    it('handles reflexive verbs ending with se', () => {
      const verb = new TestBaseVerb('arrepentirse', 'to repent');
      expect(verb.isReflexive).toBe(true);
      expect(verb.infinitive).toBe('arrepentirse');
    });

    it('extracts root correctly for AR verbs', () => {
      const verb = new TestBaseVerb('hablar', 'to speak');
      // Access protected root through conjugation
      const conjugation = verb.conjugation;
      expect(conjugation[0]).toEqual(termWithRoot('habl').endWith('o'));
    });

    it('extracts root correctly for ER verbs', () => {
      const verb = new TestBaseVerb('comer', 'to eat');
      const conjugation = verb.conjugation;
      expect(conjugation[0]).toEqual(termWithRoot('com').endWith('o'));
    });

    it('extracts root correctly for IR verbs', () => {
      const verb = new TestBaseVerb('vivir', 'to live');
      const conjugation = verb.conjugation;
      expect(conjugation[0]).toEqual(termWithRoot('viv').endWith('o'));
    });

    it('handles reflexive verbs with root extraction', () => {
      const verb = new TestBaseVerb('arrepentirse', 'to repent');
      const conjugation = verb.conjugation;
      // Root should be 'arrepent' (remove 'se' then last 2 chars 'ir')
      expect(conjugation[0]).toEqual(termWithRoot('arrepent').endWith('o'));
    });

    it('handles verbs with tildes in conjugation type', () => {
      // Verbs ending with í, é, or á should have tilde removed for conjugation type
      // removeTilde handles: í→i, é→e, á→a
      // Test with a verb ending in 'ár' - the á should be removed to get 'ar'
      const verb = new TestBaseVerb('hablár', 'to speak');
      const conjugation = verb.conjugation;
      // The conjugation type should be normalized from 'ár' to 'ar'
      expect(conjugation[0]).toEqual(termWithRoot('habl').endWith('o'));
      expect(conjugation[1]).toEqual(termWithRoot('habl').endWith('as'));
    });
  });

  describe('getEndSuffix', () => {
    it('returns correct suffixes for AR verbs', () => {
      const verb = new TestBaseVerb('hablar', 'to speak');
      const conjugation = verb.conjugation;

      expect(conjugation[0]).toEqual(termWithRoot('habl').endWith('o'));
      expect(conjugation[1]).toEqual(termWithRoot('habl').endWith('as'));
      expect(conjugation[2]).toEqual(termWithRoot('habl').endWith('a'));
      expect(conjugation[3]).toEqual(termWithRoot('habl').endWith('amos'));
      expect(conjugation[4]).toEqual(termWithRoot('habl').endWith('áis'));
      expect(conjugation[5]).toEqual(termWithRoot('habl').endWith('an'));
    });

    it('returns correct suffixes for ER verbs', () => {
      const verb = new TestBaseVerb('comer', 'to eat');
      const conjugation = verb.conjugation;

      expect(conjugation[0]).toEqual(termWithRoot('com').endWith('o'));
      expect(conjugation[1]).toEqual(termWithRoot('com').endWith('es'));
      expect(conjugation[2]).toEqual(termWithRoot('com').endWith('e'));
      expect(conjugation[3]).toEqual(termWithRoot('com').endWith('emos'));
      expect(conjugation[4]).toEqual(termWithRoot('com').endWith('éis'));
      expect(conjugation[5]).toEqual(termWithRoot('com').endWith('en'));
    });

    it('returns correct suffixes for IR verbs', () => {
      const verb = new TestBaseVerb('vivir', 'to live');
      const conjugation = verb.conjugation;

      expect(conjugation[0]).toEqual(termWithRoot('viv').endWith('o'));
      expect(conjugation[1]).toEqual(termWithRoot('viv').endWith('es'));
      expect(conjugation[2]).toEqual(termWithRoot('viv').endWith('e'));
      expect(conjugation[3]).toEqual(termWithRoot('viv').endWith('imos'));
      expect(conjugation[4]).toEqual(termWithRoot('viv').endWith('ís'));
      expect(conjugation[5]).toEqual(termWithRoot('viv').endWith('en'));
    });
  });

  describe('getEnding', () => {
    it('returns a Token with type ending and correct value', () => {
      const verb = new TestBaseVerb('hablar', 'to speak');
      // We can't directly access protected methods, but we can verify through conjugation
      const conjugation = verb.conjugation;
      expect(conjugation[0][conjugation[0].length - 1]).toEqual({
        type: 'ending',
        value: 'o',
      });
    });
  });
});
