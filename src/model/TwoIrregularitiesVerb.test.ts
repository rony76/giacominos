import { describe, expect, it } from 'vitest';
import { twoIrregularitiesVerbs } from './TwoIrregularitiesVerb.ts';
import type { Verb } from './Verb.ts';

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

    expect(conjugation[3]).toEqual([
      { type: 'root', value: 'ten' },
      { type: 'ending', value: 'emos' },
    ]);
    expect(conjugation[4]).toEqual([
      { type: 'root', value: 'ten' },
      { type: 'ending', value: 'éis' },
    ]);
  });

  it('conjugates tener correctly (turning I into IE and using G on the first)', () => {
    const verb = findVerb('tener');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual([
      { type: 'root', value: 'ten' },
      { type: 'alternateEnding', value: 'go' },
    ]);
    expect(conjugation[1]).toEqual([
      { type: 'root', value: 't' },
      { type: 'alternateRoot', value: 'e => ie' },
      { type: 'root', value: 'n' },
      { type: 'ending', value: 'es' },
    ]);
  });

  it('conjugates venir correctly (turning I into IE and using G on the first)', () => {
    const verb = findVerb('venir');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual([
      { type: 'root', value: 'ven' },
      { type: 'alternateEnding', value: 'go' },
    ]);
    expect(conjugation[1]).toEqual([
      { type: 'root', value: 'v' },
      { type: 'alternateRoot', value: 'e => ie' },
      { type: 'root', value: 'n' },
      { type: 'ending', value: 'es' },
    ]);
  });

  it('conjugates decir correctly (turning E into I and using G on the first)', () => {
    const verb = findVerb('decir');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual([
      { type: 'root', value: 'd' },
      { type: 'alternateRoot', value: 'ec => i' },
      { type: 'alternateEnding', value: 'go' },
    ]);
    expect(conjugation[1]).toEqual([
      { type: 'root', value: 'd' },
      { type: 'alternateRoot', value: 'e => i' },
      { type: 'root', value: 'c' },
      { type: 'ending', value: 'es' },
    ]);
  });

  it('conjugates oír correctly (turning I into Y and using G on the first)', () => {
    const verb = findVerb('oír');

    const conjugation = verb.conjugation;
    expect(conjugation).toHaveLength(6);

    expect(conjugation[0]).toEqual([
      { type: 'alternateRoot', value: 'o => oi' },
      { type: 'alternateEnding', value: 'go' },
    ]);
    expect(conjugation[1]).toEqual([
      { type: 'alternateRoot', value: 'o => oy' },
      { type: 'ending', value: 'es' },
    ]);
  });
});
