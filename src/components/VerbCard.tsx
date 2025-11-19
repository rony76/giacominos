import { type Verb } from '../model/Verb.ts';
import { type Term } from '../model/Conjugation';
import './VerbCard.css';
import { useState } from 'react';

interface VerbCardProps {
  verb: Verb;
}

const pronouns = ['yo', 'tú', 'él/ella/Ud.', 'nosotros', 'vosotros', 'ellos/ellas/Uds.'];

function printTerm(t: Term, verbKey: string, animated: boolean, setAnimated: (v: boolean) => void) {
  return (
    <div className="term-tokens">
      {t.map((token, index) => {
        if (token.type === 'alternateRoot') {
          const [before, after] = token.value.split(' => ');
          return (
            <div key={`${verbKey}-${index}`} className="alternateRootWrapper">
              <div className="alternateRoot" onAnimationEnd={() => setAnimated(true)}>
                <div className="prevRoot">{!animated && before || 'i'}</div>
                <div className="newRoot">{after}</div>
              </div>
            </div>
          );
        }

        return (
          <div key={`${verbKey}-${index}`} className={token.type}>
            {token.value}
          </div>
        );
      })}
    </div>
  );
}

export default function VerbCard({ verb }: VerbCardProps) {
  const [animated, setAnimated] = useState<boolean>(false)
  const conjugation = verb.conjugation;

  return (
    <div className="col-md-4 verb-card">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{verb.infinitive}</h5>
          <h6 className="card-subtitle">{verb.emoji}</h6>
          <p className="card-text">{verb.translation}</p>

          <div className="card-text">
            <table className="conjugation-table">
              <tbody>
                {conjugation.map((c, index) => (
                  <tr key={index}>
                    <td>
                      <small className="text-muted">{pronouns[index]}</small>
                    </td>
                    <td>{printTerm(c, verb.infinitive, animated, setAnimated)}</td>
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
