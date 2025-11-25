import { type ChangeEvent, type FormEvent, useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = 'Cerca...' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="search-container">
            <input
              type="text"
              className="form-control search-input"
              placeholder={placeholder}
              value={query}
              onChange={handleChange}
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>
      </div>
    </form>
  );
}
