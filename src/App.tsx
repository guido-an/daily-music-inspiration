import React, { useState } from 'react';
import DisplayGenres from './components/DisplayGenres/DisplayGenres';
import SelectedGenres from './components/SelectedGenres/SelectedGenres';
import DisplayFilters from './components/DisplayFilters/DisplayFilters';
import { EnergyLevel } from './types/enums';
import FirstScreen from './components/Screens/FirstScreen/FirstScreen';
import EnergyScreen from './components/Screens/EnergyScreen/EnergyScreen';
import GenresScreen from './components/Screens/GenresScreen/GenresScreen';
import NumTracksScreen from './components/Screens/NumTracksScreen/NumTracksScreen';
import PlaylistScreen from './components/Screens/PlaylistScreen/PlaylistScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('firstScreen');
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

  const renderScreen = (): JSX.Element => {
  switch (currentScreen) {
    case 'firstScreen':
      return <FirstScreen handleScreenChange={() => setCurrentScreen('energyScreen')} />;
    case 'energyScreen':
      return <EnergyScreen handleScreenChange={() => setCurrentScreen('genresScreen')} />;
    case 'genresScreen':
      return <GenresScreen handleScreenChange={() => setCurrentScreen('numTracksScreen')} />;
    case 'numTracksScreen':
      return <NumTracksScreen handleScreenChange={() => setCurrentScreen('playListScreen')} />;
    case 'playListScreen':
      return <PlaylistScreen />;
    default:
      return <FirstScreen handleScreenChange={() => setCurrentScreen('energyScreen')} />;;
  }
};

  return (
    <>
    {renderScreen()}
      {/* <DisplayFilters
        numTracks={numTracks}
        energyLevel={energyLevel}
        setNumTracks={setNumTracks}
        setEnergyLevel={setEnergyLevel}
      />
      <SelectedGenres selectedGenres={selectedGenres} />
      <button onClick={getRecommendations}>Generate playlist</button>
      <DisplayGenres handleGenreClick={handleGenreClick} /> */}
    </>
  );
};

export default App;
