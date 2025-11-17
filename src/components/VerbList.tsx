import { type Verb } from '../hooks/VerbListContext';

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
      {verbs.map((verb, index) => (
        <div key={index} className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{verb.infinitive}</h5>
            {verb.conjugation && <small className="text-muted">{verb.conjugation}</small>}
          </div>
          <p className="mb-1">{verb.translation}</p>
        </div>
      ))}
    </div>
  );
}
