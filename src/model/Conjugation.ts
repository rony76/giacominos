export interface Token {
  type: 'root' | 'alternateRoot' | 'ending' | 'alternateEnding';
  value: string;
}

export type Term = Token[];

export type Conjugation = Term[];
