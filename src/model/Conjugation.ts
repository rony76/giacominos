export interface Token {
  type: 'root' | 'altRoot' | 'ending' | 'altEnding';
  value: string;
}

export type Term = Token[];

export type Conjugation = Term[];
