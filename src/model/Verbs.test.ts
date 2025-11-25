import { describe, expect, it } from 'vitest';
import { allVerbs } from './Verbs.ts';

describe('All the verbs', () => {
  it('Conjugate correctly', () => {
    allVerbs.forEach((verb) => {
      expect(verb.conjugation).toHaveLength(6);
    });
  });
});
