// @ts-ignore - BaseVerb is intentionally private and unused for now
class BaseVerb {
  infinitive: string;
  translation: string;

  constructor(infinitive: string, translation: string) {
    this.infinitive = infinitive;
    this.translation = translation;
  }
}

class RegularVerb extends BaseVerb {
  constructor(infinitive: string, translation: string) {
    super(infinitive, translation);
  }

  get conjugation(): string[] {
    const ending = this.infinitive.slice(-2);
    const root = this.infinitive.slice(0, -2);
    return [
      root + 'o',
      root + (ending === 'ar' ? 'as' : 'es'),
      root + (ending === 'ar' ? 'a' : 'e'),
      root + (ending === 'ar' ? 'amos' : ending === 'er' ? 'emos' : 'imos'),
      root + (ending === 'ar' ? 'áis' : ending === 'er' ? 'éis' : 'ís'),
      root + (ending === 'ar' ? 'an' : 'en'),
    ];
  }
}

export interface Verb {
  infinitive: string;
  translation: string;
  conjugation?: string[];
}

export const allVerbs: Verb[] = [
  new RegularVerb('hablar', 'parlare'),
  new RegularVerb('comer', 'mangiare'),
  new RegularVerb('vivir', 'vivere'),
  // Add more verbs as needed
];
