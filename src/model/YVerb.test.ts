import { describe, expect, it } from 'vitest';
import { YVerb } from './YVerb';

import { termWithRoot } from './TermBuilder.ts';

describe('YVerb', () => {
  it('conjugates regularly for nosotros and vosotros', () => {
    const verb = new YVerb('construir', 'costruire');

    expect(verb.emoji).toBe('Ⓨ');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[3]).toEqual(termWithRoot('constru').endWith('imos'));
    expect(conjugation[4]).toEqual(termWithRoot('constru').endWith('ís'));
  });

  describe('AR verbs', () => {
    it('conjugates construir correctly (turning I into Y)', () => {
      const verb = new YVerb('construir', 'costruire');

      expect(verb.emoji).toBe('Ⓨ');

      const conjugation = verb.conjugation;
      expect(conjugation).toHaveLength(6);

      expect(conjugation[0]).toEqual(termWithRoot('constru').addAltRoot('i', 'y').endWith('o'));
      expect(conjugation[1]).toEqual(termWithRoot('constru').addAltRoot('i', 'y').endWith('es'));
      expect(conjugation[2]).toEqual(termWithRoot('constru').addAltRoot('i', 'y').endWith('e'));
      expect(conjugation[5]).toEqual(termWithRoot('constru').addAltRoot('i', 'y').endWith('en'));
    });
  });
});
