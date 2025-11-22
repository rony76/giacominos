import { describe, it, expect } from 'vitest';
import { SadVerb } from './SadVerb';
import { termWithRoot } from './Conjugation.ts';

describe('SadVerb', () => {
  it('conjugates regularly for nosotros and vosotros', () => {
    const verb = new SadVerb('jugar', 'giocare');

    expect(verb.emoji).toBe('😢');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[3]).toEqual(termWithRoot('jug').endWith('amos'));
    expect(conjugation[4]).toEqual(termWithRoot('jug').endWith('áis'));
  });

  describe('AR verbs', () => {
    it('conjugates jugar correctly (turning U into UE)', () => {
      const verb = new SadVerb('jugar', 'giocare');

      expect(verb.emoji).toBe('😢');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual(
        termWithRoot('j').addAltRoot('u', 'ue').addRoot('g').endWith('o')
      );
      expect(conjugation[1]).toEqual(
        termWithRoot('j').addAltRoot('u', 'ue').addRoot('g').endWith('as')
      );
      expect(conjugation[2]).toEqual(
        termWithRoot('j').addAltRoot('u', 'ue').addRoot('g').endWith('a')
      );
      expect(conjugation[5]).toEqual(
        termWithRoot('j').addAltRoot('u', 'ue').addRoot('g').endWith('an')
      );
    });

    it('conjugates sonar correctly (turning O into UE)', () => {
      const verb = new SadVerb('sonar', 'suonare');

      expect(verb.emoji).toBe('😢');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual(
        termWithRoot('s').addAltRoot('o', 'ue').addRoot('n').endWith('o')
      );
      expect(conjugation[1]).toEqual(
        termWithRoot('s').addAltRoot('o', 'ue').addRoot('n').endWith('as')
      );
      expect(conjugation[2]).toEqual(
        termWithRoot('s').addAltRoot('o', 'ue').addRoot('n').endWith('a')
      );
      expect(conjugation[5]).toEqual(
        termWithRoot('s').addAltRoot('o', 'ue').addRoot('n').endWith('an')
      );
    });
  });
});
