import { describe, expect, it } from 'vitest';
import { twoIrregularitiesVerbs } from './TwoIrregularitiesVerb.ts';
import type { Verb } from './Verb.ts';
import { termWithRoot, termWithAltRoot } from './Conjugation.ts';

describe('Two irregularities verb', () => {
  function findVerb(inf: string): Verb {
    const verb = twoIrregularitiesVerbs.find((v) => v.infinitive === inf);
    expect(verb).toBeTruthy();
    if (!verb) throw new Error('Cannot find verb ' + inf);
    return verb;
  }

  it('conjugates regularly for nosotros and vosotros', () => {
    const verb = findVerb('tener');

    expect(verb.emoji).toBe('2️⃣');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[3]).toEqual(termWithRoot('ten').endWith('emos'));
    expect(conjugation[4]).toEqual(termWithRoot('ten').endWith('éis'));
  });

  it('conjugates tener correctly (turning I into IE and using G on the first)', () => {
    const verb = findVerb('tener');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual(termWithRoot('ten').endWithAlt('go'));
    expect(conjugation[1]).toEqual(
      termWithRoot('t').addAltRoot('e', 'ie').addRoot('n').endWith('es')
    );
  });

  it('conjugates venir correctly (turning I into IE and using G on the first)', () => {
    const verb = findVerb('venir');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual(termWithRoot('ven').endWithAlt('go'));
    expect(conjugation[1]).toEqual(
      termWithRoot('v').addAltRoot('e', 'ie').addRoot('n').endWith('es')
    );
  });

  it('conjugates decir correctly (turning E into I and using G on the first)', () => {
    const verb = findVerb('decir');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual(termWithRoot('d').addAltRoot('ec', 'i').endWithAlt('go'));
    expect(conjugation[1]).toEqual(
      termWithRoot('d').addAltRoot('e', 'i').addRoot('c').endWith('es')
    );
  });

  it('conjugates oír correctly (turning I into Y and using G on the first)', () => {
    const verb = findVerb('oír');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual(termWithAltRoot('o', 'oi').endWithAlt('go'));
    expect(conjugation[1]).toEqual(termWithAltRoot('o', 'oy').endWith('es'));
  });
});
