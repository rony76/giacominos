export interface Token {
  type: 'root' | 'altRoot' | 'ending' | 'altEnding';
  value: string;
}

export type Term = Token[];

const clone = (tokens: Token[]): Token[] => {
  return tokens.map((t) => t);
};

const cloneAndPush = (tokens: Token[], token: Token): Token[] => {
  const res = clone(tokens);
  res.push(token);
  return res;
};

export class TermBuilder {
  private tokens: Token[];

  constructor(tokens: Token[] = []) {
    if (typeof tokens !== 'object' || !tokens['map']) {
      throw new Error('Invalid tokens array in constructor' + JSON.stringify(tokens));
    }
    this.tokens = tokens;
  }

  addRoot(value: string): TermBuilder {
    return new TermBuilder(cloneAndPush(this.tokens, { type: 'root', value }));
  }

  addAltRoot(before: string, after: string): TermBuilder {
    return new TermBuilder(
      cloneAndPush(this.tokens, { type: 'altRoot', value: `${before} => ${after}` })
    );
  }

  endWith(value: string): Term {
    return cloneAndPush(this.tokens, { type: 'ending', value });
  }

  endWithAlt(value: string): Term {
    return cloneAndPush(this.tokens, { type: 'altEnding', value });
  }
}

export function termWithRoot(root: string): TermBuilder {
  return new TermBuilder().addRoot(root);
}

export function termWithAltRoot(before: string, after: string): TermBuilder {
  return new TermBuilder().addAltRoot(before, after);
}

export type Conjugation = Term[];
