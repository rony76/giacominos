import { describe, expect, it } from 'vitest';
import { XxxooxVerb } from './XxxooxVerb';
import type { VerbType } from './Verb';
import { TermBuilder, termWithRoot } from './TermBuilder';

// Test subclass to test XxxooxVerb functionality
class TestXxxooxVerb extends XxxooxVerb {
  get verbType(): VerbType {
    return 'happy';
  }

  protected createModifiedRoot(): TermBuilder {
    // Create a modified root using the actual verb root with x => y transformation
    return termWithRoot(this.root).addAltRoot('x', 'y');
  }
}

describe('XxxooxVerb', () => {
  describe('conjugation pattern', () => {
    it('follows the xxxoox pattern for AR verbs', () => {
      const verb = new TestXxxooxVerb('hablar', 'to speak');
      const conjugation = verb.conjugation;

      expect(conjugation).toHaveLength(6);

      // Positions 0, 1, 2, 5 should use modified root (xxx)
      const modifiedRoot = termWithRoot('habl').addAltRoot('x', 'y');
      expect(conjugation[0]).toEqual(modifiedRoot.endWith('o'));
      expect(conjugation[1]).toEqual(modifiedRoot.endWith('as'));
      expect(conjugation[2]).toEqual(modifiedRoot.endWith('a'));
      expect(conjugation[5]).toEqual(modifiedRoot.endWith('an'));

      // Positions 3, 4 should use regular root (oo)
      const regularRoot = termWithRoot('habl');
      expect(conjugation[3]).toEqual(regularRoot.endWith('amos'));
      expect(conjugation[4]).toEqual(regularRoot.endWith('áis'));
    });

    it('follows the xxxoox pattern for ER verbs', () => {
      const verb = new TestXxxooxVerb('comer', 'to eat');
      const conjugation = verb.conjugation;

      expect(conjugation).toHaveLength(6);

      const modifiedRoot = termWithRoot('com').addAltRoot('x', 'y');
      expect(conjugation[0]).toEqual(modifiedRoot.endWith('o'));
      expect(conjugation[1]).toEqual(modifiedRoot.endWith('es'));
      expect(conjugation[2]).toEqual(modifiedRoot.endWith('e'));
      expect(conjugation[5]).toEqual(modifiedRoot.endWith('en'));

      const regularRoot = termWithRoot('com');
      expect(conjugation[3]).toEqual(regularRoot.endWith('emos'));
      expect(conjugation[4]).toEqual(regularRoot.endWith('éis'));
    });

    it('follows the xxxoox pattern for IR verbs', () => {
      const verb = new TestXxxooxVerb('vivir', 'to live');
      const conjugation = verb.conjugation;

      expect(conjugation).toHaveLength(6);

      const modifiedRoot = termWithRoot('viv').addAltRoot('x', 'y');
      expect(conjugation[0]).toEqual(modifiedRoot.endWith('o'));
      expect(conjugation[1]).toEqual(modifiedRoot.endWith('es'));
      expect(conjugation[2]).toEqual(modifiedRoot.endWith('e'));
      expect(conjugation[5]).toEqual(modifiedRoot.endWith('en'));

      const regularRoot = termWithRoot('viv');
      expect(conjugation[3]).toEqual(regularRoot.endWith('imos'));
      expect(conjugation[4]).toEqual(regularRoot.endWith('ís'));
    });

    it('handles reflexive verbs correctly', () => {
      const verb = new TestXxxooxVerb('arrepentirse', 'to repent');
      const conjugation = verb.conjugation;

      expect(conjugation).toHaveLength(6);
      expect(verb.isReflexive).toBe(true);

      // Root should be 'arrepent' (remove 'se' then last 2 chars 'ir')
      const modifiedRoot = termWithRoot('arrepent').addAltRoot('x', 'y');
      const regularRoot = termWithRoot('arrepent');

      expect(conjugation[0]).toEqual(modifiedRoot.endWith('o'));
      expect(conjugation[3]).toEqual(regularRoot.endWith('imos'));
    });
  });

  describe('inheritance from BaseVerb', () => {
    it('inherits infinitive and translation', () => {
      const verb = new TestXxxooxVerb('hablar', 'to speak');
      expect(verb.infinitive).toBe('hablar');
      expect(verb.translation).toBe('to speak');
    });

    it('inherits verbType getter', () => {
      const verb = new TestXxxooxVerb('hablar', 'to speak');
      expect(verb.verbType).toBe('happy');
    });

    it('inherits isReflexive property', () => {
      const regularVerb = new TestXxxooxVerb('hablar', 'to speak');
      expect(regularVerb.isReflexive).toBe(false);

      const reflexiveVerb = new TestXxxooxVerb('arrepentirse', 'to repent');
      expect(reflexiveVerb.isReflexive).toBe(true);
    });
  });

  describe('createModifiedRoot', () => {
    it('is called to create modified root for positions 0, 1, 2, 5', () => {
      const verb = new TestXxxooxVerb('hablar', 'to speak');
      const conjugation = verb.conjugation;

      // All modified positions should contain the altRoot
      const modifiedRoot = termWithRoot('habl').addAltRoot('x', 'y');
      expect(conjugation[0]).toEqual(modifiedRoot.endWith('o'));
      expect(conjugation[1]).toEqual(modifiedRoot.endWith('as'));
      expect(conjugation[2]).toEqual(modifiedRoot.endWith('a'));
      expect(conjugation[5]).toEqual(modifiedRoot.endWith('an'));
    });
  });
});
