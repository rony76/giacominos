import { createContext, useContext, useState, type ReactNode } from 'react';
import { removeTilde, type Verb } from '../model/Verb';
import { allVerbs } from '../model/Verbs';

interface VerbListContextType {
  verbs: Verb[];
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

  return (
    <VerbListContext.Provider value={{ verbs, filterVerbs }}>{children}</VerbListContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useVerbList() {
  const context = useContext(VerbListContext);
  if (context === undefined) {
    throw new Error('useVerbList must be used within a VerbListProvider');
  }
  return context;
}

export type { Verb, VerbListContextType };
