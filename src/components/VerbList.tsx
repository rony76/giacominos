import { type Verb } from '../model/Verb.ts';
import VerbCard from './VerbCard';

interface VerbListProps {
  verbs: Verb[];
}

export default function VerbList({ verbs }: VerbListProps) {
  return (
    <div className="row">
      {verbs.map((verb) => (
        <VerbCard key={verb.infinitive} verb={verb} fixedExpanded={verbs.length === 1} />
      ))}
    </div>
  );
}
