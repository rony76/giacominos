import { type Verb } from '../hooks/VerbListContext';

interface VerbCardProps {
  verb: Verb;
}

const pronouns = ['yo', 'tú', 'él/ella/Ud.', 'nosotros', 'vosotros', 'ellos/ellas/Uds.'];

export default function VerbCard({ verb }: VerbCardProps) {
  const conjugation = verb.conjugation;

  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{verb.infinitive}</h5>
          <p className="card-text">{verb.translation}</p>

          {conjugation && (
            <div className="card-text">
              <small className="text-muted">
                <table className="table table-sm">
                  <tbody>
                    {conjugation.map((c, index) => (
                      <tr key={index}>
                        <td>{pronouns[index]}</td>
                        <td>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
