import './App.css';
import SearchBarWrapper from './components/SearchBarWrapper';
import VerbListWrapper from './components/VerbListWrapper';
import { VerbListContextProvider } from './hooks/VerbListContext';

function App() {
  return (
    <>
      <h1>Los verbos de los Giacominos</h1>
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
