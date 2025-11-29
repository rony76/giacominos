import { useVerbs } from '../hooks/VerbListContext';
import VerbList from './VerbList';
import { type VerbType, verbTypes } from '../model/Verb.ts';

const typeToEmoji: Map<VerbType, string> = new Map([
  ['regular', '✅'],
  ['happy', '😊'],
  ['sad', '😢'],
  ['so-and-so', '😐'],
  ['one-special', '1️⃣'],
  ['two-specials', '2️⃣'],
  ['y', 'ⓨ'],
  ['irregular', '🤯'],
]);

export default function VerbListWrapper() {
  const { verbMap } = useVerbs();

  const cols = verbMap.size;
  const colLg = cols >= 4 ? 3 : Math.floor(12 / cols);
  const colMd = cols >= 3 ? 4 : Math.floor(12 / cols);

  if (verbMap.size === 0) {
    return (
      <div className="alert alert-info" role="alert">
        Non ci sono verbi da visualizzare
      </div>
    );
  }

  return (
    <div className="row">
      {verbTypes
        .filter((verbType) => verbMap.has(verbType))
        .map((verbType) => (
          <div key={verbType} className={`col-lg-${colLg} col-md-${colMd} cold-sm-1`}>
            <h2 className="mb-3 text-capitalize">{typeToEmoji.get(verbType)}</h2>
            <VerbList verbs={verbMap.get(verbType)!} />
          </div>
        ))}
    </div>
  );
}
