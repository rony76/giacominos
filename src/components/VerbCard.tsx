import { type Verb } from '../model/Verb.ts';
import { type Term } from '../model/Conjugation';
import './VerbCard.css';
import { useState } from 'react';

interface VerbCardProps {
  verb: Verb;
  fixedExpanded: boolean;
}

const subjects = ['yo', 'tú', 'él/ella/Ud.', 'nosotros', 'vosotros', 'ellos/ellas/Uds.'];
const reflexiveSubjects = ['me', 'te', 'se', 'nos', 'os', 'se'];

function printTerm(t: Term, verbKey: string, animated: boolean, setAnimated: (v: boolean) => void) {
  return (
    <div className="term-tokens">
      {t.map((token, index) => {
        if (token.type === 'altRoot') {
          const [before, after] = token.value.split(' => ');
          return (
            <div key={`${verbKey}-${index}`} className="alternateRootWrapper">
              <div className="altRoot" onAnimationEnd={() => setAnimated(true)}>
                <div className="prevRoot">{(!animated && before) || 'i'}</div>
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

export default function VerbCard({ verb, fixedExpanded }: VerbCardProps) {
  const [animated, setAnimated] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(fixedExpanded);
  const conjugation = verb.conjugation;

  if (fixedExpanded && !expanded) {
    setExpanded(fixedExpanded);
  }

  function toggleExpanded() {
    console.log('Toggling expanded for', verb.infinitive, fixedExpanded);
    if (fixedExpanded) return;
    setExpanded((e) => !e);
  }

  let animationClass = '';
  if (!fixedExpanded) {
    animationClass = expanded ? ' expanding' : ' collapsing';
  }

  return (
    <div className="verb-card">
      <div className={'card h-100 px-0' + animationClass}>
        <div className="card-body" onClick={toggleExpanded}>
          <h5 className="card-title">{verb.infinitive}</h5>
          <p className="card-text">{verb.translation}</p>

          {expanded && (
            <div className="card-text">
              <table className="conjugation-table">
                <tbody>
                  {conjugation.map((c, index) => (
                    <tr key={index}>
                      <td>
                        <small className="text-muted">
                          {subjects[index]}
                          {verb.isReflexive && ' ' + reflexiveSubjects[index]}
                        </small>
                      </td>
                      <td>{printTerm(c, verb.infinitive, animated, setAnimated)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
