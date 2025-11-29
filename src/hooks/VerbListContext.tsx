import { createContext, type ReactNode, useContext, useState } from 'react';
import { removeTilde, type Verb, type VerbType } from '../model/Verb';
import { allVerbs } from '../model/Verbs';

interface VerbListContextType {
  verbMap: Map<VerbType, Verb[]>;
  filterVerbs: (query: string) => void;
}

const VerbListContext = createContext<VerbListContextType | undefined>(undefined);

export function VerbListContextProvider({ children }: { children: ReactNode }) {
  const [verbs, setVerbs] = useState<Verb[]>(allVerbs);

  const filterVerbs = (query: string) => {
    if (query.trim() === '') {
      setVerbs(allVerbs.slice(0, 12));
      return;
    }

    query = query.trim().toLowerCase();

    setVerbs(
      allVerbs
        .filter(
          (verb) => removeTilde(verb.infinitive).includes(query) || verb.translation.includes(query)
        )
        .slice(0, 12)
    );
  };

  const verbMap = verbs.reduce((m: Map<VerbType, Verb[]>, v) => {
    if (!m.has(v.verbType)) {
      m.set(v.verbType, []);
    }
    m.get(v.verbType)?.push(v);
    return m;
  }, new Map<VerbType, Verb[]>());

  return (
    <VerbListContext.Provider value={{ verbMap, filterVerbs }}>{children}</VerbListContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useVerbs() {
  const context = useContext(VerbListContext);
  if (context === undefined) {
    throw new Error('useVerbList must be used within a VerbListProvider');
  }
  return context;
}

export type { Verb, VerbListContextType };
