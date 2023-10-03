import React, {useState} from 'react';
import DisplayGenres from './components/DisplayGenres/DisplayGenres';
import SelectedGenres from './components/SelectedGenres/SelectedGenres';
import { handleGenreClick } from './utils/genreHandling';

const App: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  return (
    <>
      <SelectedGenres selectedGenres={selectedGenres}/>
      <DisplayGenres
        handleGenreClick={(genre: string) =>
          handleGenreClick(genre, selectedGenres, setSelectedGenres)
        }
      />
    </>
  );
}

export default App;
