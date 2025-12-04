import { describe, expect, it } from 'vitest';
import {
  TermBuilder,
  termWithRoot,
  termWithAltRoot,
  fullIrregularTerm,
} from './TermBuilder';

describe('TermBuilder', () => {
  describe('constructor', () => {
    it('creates an empty TermBuilder by default', () => {
      const builder = new TermBuilder();
      expect(builder).toBeInstanceOf(TermBuilder);
    });

    it('creates a TermBuilder with initial tokens', () => {
      const tokens = [{ type: 'root' as const, value: 'test' }];
      const builder = new TermBuilder(tokens);
      expect(builder).toBeInstanceOf(TermBuilder);
    });

    it('throws error for invalid tokens array', () => {
      // null throws before the check due to property access
      expect(() => new TermBuilder(null as any)).toThrow();
      
      // undefined gets default parameter value [], so it doesn't throw
      // But we can test with other invalid types
      expect(() => new TermBuilder('invalid' as any)).toThrow(
        'Invalid tokens array in constructor'
      );
      expect(() => new TermBuilder(123 as any)).toThrow(
        'Invalid tokens array in constructor'
      );
    });
  });

  describe('addRoot', () => {
    it('adds a root token and returns a new TermBuilder', () => {
      const builder = new TermBuilder();
      const newBuilder = builder.addRoot('habl');

      expect(newBuilder).toBeInstanceOf(TermBuilder);
      expect(newBuilder).not.toBe(builder);
    });

    it('builds a term with root and ending', () => {
      const term = new TermBuilder().addRoot('habl').endWith('o');
      expect(term).toEqual([
        { type: 'root', value: 'habl' },
        { type: 'ending', value: 'o' },
      ]);
    });

    it('can chain multiple addRoot calls', () => {
      const term = new TermBuilder()
        .addRoot('t')
        .addRoot('e')
        .addRoot('st')
        .endWith('o');
      expect(term).toEqual([
        { type: 'root', value: 't' },
        { type: 'root', value: 'e' },
        { type: 'root', value: 'st' },
        { type: 'ending', value: 'o' },
      ]);
    });
  });

  describe('addAltRoot', () => {
    it('adds an altRoot token with before => after format', () => {
      const term = new TermBuilder().addAltRoot('e', 'ie').endWith('o');
      expect(term).toEqual([
        { type: 'altRoot', value: 'e => ie' },
        { type: 'ending', value: 'o' },
      ]);
    });

    it('can combine root and altRoot', () => {
      const term = new TermBuilder()
        .addRoot('t')
        .addAltRoot('e', 'ie')
        .addRoot('mbl')
        .endWith('o');
      expect(term).toEqual([
        { type: 'root', value: 't' },
        { type: 'altRoot', value: 'e => ie' },
        { type: 'root', value: 'mbl' },
        { type: 'ending', value: 'o' },
      ]);
    });
  });

  describe('endWith', () => {
    it('adds an ending token and returns a Term', () => {
      const term = new TermBuilder().addRoot('habl').endWith('o');
      expect(term).toEqual([
        { type: 'root', value: 'habl' },
        { type: 'ending', value: 'o' },
      ]);
    });

    it('can end with empty string', () => {
      const term = new TermBuilder().addRoot('test').endWith('');
      expect(term).toEqual([
        { type: 'root', value: 'test' },
        { type: 'ending', value: '' },
      ]);
    });
  });

  describe('endWithAlt', () => {
    it('adds an altEnding token and returns a Term', () => {
      const term = new TermBuilder().addRoot('s').endWithAlt('oy');
      expect(term).toEqual([
        { type: 'root', value: 's' },
        { type: 'altEnding', value: 'oy' },
      ]);
    });

    it('can combine with altRoot', () => {
      const term = new TermBuilder()
        .addRoot('d')
        .addAltRoot('ec', 'i')
        .endWithAlt('go');
      expect(term).toEqual([
        { type: 'root', value: 'd' },
        { type: 'altRoot', value: 'ec => i' },
        { type: 'altEnding', value: 'go' },
      ]);
    });
  });

  describe('immutability', () => {
    it('does not mutate the original builder when adding tokens', () => {
      const builder1 = new TermBuilder().addRoot('test1');
      const builder2 = builder1.addRoot('test2');

      const term1 = builder1.endWith('o');
      const term2 = builder2.endWith('o');

      expect(term1).toEqual([
        { type: 'root', value: 'test1' },
        { type: 'ending', value: 'o' },
      ]);
      expect(term2).toEqual([
        { type: 'root', value: 'test1' },
        { type: 'root', value: 'test2' },
        { type: 'ending', value: 'o' },
      ]);
    });
  });
});

describe('termWithRoot', () => {
  it('creates a TermBuilder with a root token', () => {
    const builder = termWithRoot('habl');
    expect(builder).toBeInstanceOf(TermBuilder);

    const term = builder.endWith('o');
    expect(term).toEqual([
      { type: 'root', value: 'habl' },
      { type: 'ending', value: 'o' },
    ]);
  });

  it('can be chained with other methods', () => {
    const term = termWithRoot('t')
      .addAltRoot('e', 'ie')
      .addRoot('mbl')
      .endWith('o');
    expect(term).toEqual([
      { type: 'root', value: 't' },
      { type: 'altRoot', value: 'e => ie' },
      { type: 'root', value: 'mbl' },
      { type: 'ending', value: 'o' },
    ]);
  });
});

describe('termWithAltRoot', () => {
  it('creates a TermBuilder with an altRoot token', () => {
    const builder = termWithAltRoot('e', 'ie');
    expect(builder).toBeInstanceOf(TermBuilder);

    const term = builder.endWith('o');
    expect(term).toEqual([
      { type: 'altRoot', value: 'e => ie' },
      { type: 'ending', value: 'o' },
    ]);
  });

  it('can be chained with other methods', () => {
    const term = termWithAltRoot('e', 'ie')
      .addRoot('mbl')
      .endWith('o');
    expect(term).toEqual([
      { type: 'altRoot', value: 'e => ie' },
      { type: 'root', value: 'mbl' },
      { type: 'ending', value: 'o' },
    ]);
  });
});

describe('fullIrregularTerm', () => {
  it('creates a term with only an altEnding', () => {
    const term = fullIrregularTerm('voy');
    expect(term).toEqual([{ type: 'altEnding', value: 'voy' }]);
  });

  it('creates a term with different irregular forms', () => {
    expect(fullIrregularTerm('eres')).toEqual([
      { type: 'altEnding', value: 'eres' },
    ]);
    expect(fullIrregularTerm('es')).toEqual([
      { type: 'altEnding', value: 'es' },
    ]);
    expect(fullIrregularTerm('')).toEqual([{ type: 'altEnding', value: '' }]);
  });
});

