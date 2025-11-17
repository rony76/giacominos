import './App.css';
import SearchBarWrapper from './components/SearchBarWrapper';
import VerbListWrapper from './components/VerbListWrapper';
import { VerbListContextProvider } from './hooks/VerbListContext';

function App() {
  return (
    <>
      <h1>
        Los verbos de los{' '}
        <span style={{ color: '#AA151B' }}>Gia</span>
        <span style={{ color: '#F1BF00' }}>comi</span>
        <span style={{ color: '#AA151B' }}>nos</span>
      </h1>
      <div className="container mt-4">
        <VerbListContextProvider>
          <SearchBarWrapper />
          <VerbListWrapper />
        </VerbListContextProvider>
      </div>
    </>
  );
}

export default App;
