import { type Verb } from '../hooks/VerbListContext';
import VerbCard from './VerbCard';

interface VerbListProps {
  verbs: Verb[];
}

export default function VerbList({ verbs }: VerbListProps) {
  if (verbs.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        Non ci sono verbi da visualizzare
      </div>
    );
  }

  return (
    <div className="row">
      {verbs.map((verb) => (
        <VerbCard key={verb.infinitive} verb={verb} />
      ))}
    </div>
  );
}
