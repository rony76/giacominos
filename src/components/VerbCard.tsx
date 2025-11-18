import { type Verb } from '../hooks/VerbListContext';
import { type Term } from '../model/Conjugation';
import './VerbCard.css';

interface VerbCardProps {
  verb: Verb;
}

const pronouns = ['yo', 'tú', 'él/ella/Ud.', 'nosotros', 'vosotros', 'ellos/ellas/Uds.'];

function printTerm(t: Term, verbKey: string, rowIndex: number) {
  return t.map((token, index) => (
    <span key={`${verbKey}-${rowIndex}-${index}`} className={token.type}>
      {token.value}
    </span>
  ));
}

export default function VerbCard({ verb }: VerbCardProps) {
  const conjugation = verb.conjugation;

  return (
    <div className="col-md-4 verb-card">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{verb.infinitive}</h5>
          <p className="card-text">{verb.translation}</p>

          <div className="card-text">
            <table className="conjugation-table">
              <tbody>
                {conjugation.map((c, index) => (
                  <tr key={index}>
                    <td>
                      <small className="text-muted">{pronouns[index]}</small>
                    </td>
                    <td>{printTerm(c, verb.infinitive, index)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
