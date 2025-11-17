import { type Verb } from '../hooks/VerbListContext';

interface VerbItemProps {
  verb: Verb;
}

const pronouns = ['yo', 'tú', 'él/ella/Ud.', 'nosotros', 'vosotros', 'ellos/ellas/Uds.'];

export default function VerbItem({ verb }: VerbItemProps) {
  const conjugation = verb.conjugation;

  return (
    <div className="list-group-item">
      <div className="d-flex flex-column w-100 justify-content-between">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{verb.infinitive}</h5>
          <p className="mb-1">{verb.translation}</p>
        </div>

        {conjugation && (
          <small className="text-muted">
            <table>
              <tbody>
                {conjugation.map((c, index) => (
                  <tr>
                    <td>{pronouns[index]}</td>
                    <td>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </small>
        )}
      </div>
    </div>
  );
}
