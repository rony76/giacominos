import { useVerbList } from '../hooks/VerbListContext';
import SearchBar from './SearchBar';

export default function SearchBarWrapper() {
  const { filterVerbs } = useVerbList();

  const loggingFilter = (query: string) => {
    console.log('Filtering verbs with query:', query);
    filterVerbs(query);
  };

  return <SearchBar onSearch={loggingFilter} placeholder="filtra..." />;
}
