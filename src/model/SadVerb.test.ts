import { describe, it, expect } from 'vitest';
import { SadVerb } from './SadVerb';

describe('SadVerb', () => {
  it('conjugates regularly for nosotros and vosotros', () => {
    const verb = new SadVerb('jugar', 'giocare');

    expect(verb.emoji).toBe('😢');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[3]).toEqual([
      { type: 'root', value: 'jug' },
      { type: 'ending', value: 'amos' },
    ]);
    expect(conjugation[4]).toEqual([
      { type: 'root', value: 'jug' },
      { type: 'ending', value: 'áis' },
    ]);
  });

  describe('AR verbs', () => {
    it('conjugates jugar correctly (turning U into UE)', () => {
      const verb = new SadVerb('jugar', 'giocare');

      expect(verb.emoji).toBe('😢');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual([
        { type: 'root', value: 'j' },
        { type: 'alternateRoot', value: 'ue' },
        { type: 'root', value: 'g' },
        { type: 'ending', value: 'o' },
      ]);
      expect(conjugation[1]).toEqual([
        { type: 'root', value: 'j' },
        { type: 'alternateRoot', value: 'ue' },
        { type: 'root', value: 'g' },
        { type: 'ending', value: 'as' },
      ]);
      expect(conjugation[2]).toEqual([
        { type: 'root', value: 'j' },
        { type: 'alternateRoot', value: 'ue' },
        { type: 'root', value: 'g' },
        { type: 'ending', value: 'a' },
      ]);
      expect(conjugation[5]).toEqual([
        { type: 'root', value: 'j' },
        { type: 'alternateRoot', value: 'ue' },
        { type: 'root', value: 'g' },
        { type: 'ending', value: 'an' },
      ]);
    });

    it('conjugates sonar correctly (turning O into UE)', () => {
      const verb = new SadVerb('sonar', 'suonare');

      expect(verb.emoji).toBe('😢');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual([
        { type: 'root', value: 's' },
        { type: 'alternateRoot', value: 'ue' },
        { type: 'root', value: 'n' },
        { type: 'ending', value: 'o' },
      ]);
      expect(conjugation[1]).toEqual([
        { type: 'root', value: 's' },
        { type: 'alternateRoot', value: 'ue' },
        { type: 'root', value: 'n' },
        { type: 'ending', value: 'as' },
      ]);
      expect(conjugation[2]).toEqual([
        { type: 'root', value: 's' },
        { type: 'alternateRoot', value: 'ue' },
        { type: 'root', value: 'n' },
        { type: 'ending', value: 'a' },
      ]);
      expect(conjugation[5]).toEqual([
        { type: 'root', value: 's' },
        { type: 'alternateRoot', value: 'ue' },
        { type: 'root', value: 'n' },
        { type: 'ending', value: 'an' },
      ]);
    });
  });
});
