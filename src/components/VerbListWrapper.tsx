import { useVerbList } from '../hooks/VerbListContext';
import VerbList from './VerbList';

export default function VerbListWrapper() {
  const { verbs } = useVerbList();

  return <VerbList verbs={verbs} />;
}
