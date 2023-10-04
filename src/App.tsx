import React, { useState } from 'react';
import DisplayGenres from './components/DisplayGenres/DisplayGenres';
import SelectedGenres from './components/SelectedGenres/SelectedGenres';
import DisplayFilters from './components/DisplayFilters/DisplayFilters';
import { EnergyLevel } from './enums';

const App: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [numTracks, setNumTracks] = useState<number>(10);
  const [energyLevel, setEnergyLevel] = useState<number>(EnergyLevel.HAPPY_VIBES);

  const handleGenreClick = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres((prevSelectedGenres: string[]) =>
        prevSelectedGenres.filter((selectedGenre: string) => selectedGenre !== genre)
      );
    } else {
      if (selectedGenres.length < 5) {
        setSelectedGenres((prevSelectedGenres: string[]) => [...prevSelectedGenres, genre]);
      } else {
        alert('You can select up to 5 genres.');
      }
    }
  };

  function getRecommendations(){
    console.log(numTracks, energyLevel)
  }

  return (
    <>
      <DisplayFilters
        numTracks={numTracks}
        energyLevel={energyLevel}
        setNumTracks={setNumTracks}
        setEnergyLevel={setEnergyLevel}
      />
      <SelectedGenres selectedGenres={selectedGenres} />
      <button onClick={getRecommendations}>Generate playlist</button>
      <DisplayGenres handleGenreClick={handleGenreClick} />
    </>
  );
};

export default App;
