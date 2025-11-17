import { type Verb } from '../hooks/VerbListContext';
import VerbItem from './VerbItem';

interface VerbListProps {
  verbs: Verb[];
}

export default function VerbList({ verbs }: VerbListProps) {
  if (verbs.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        No verbs to display
      </div>
    );
  }

  return (
    <div className="list-group">
      {verbs.map((verb) => (
        <VerbItem key={verb.infinitive} verb={verb} />
      ))}
    </div>
  );
}
