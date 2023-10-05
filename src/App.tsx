import React, { useState } from 'react';
import FirstScreen from './components/Screens/FirstScreen/FirstScreen';
import EnergyScreen from './components/Screens/EnergyScreen/EnergyScreen';
import { EnergyLevel } from './types/enums';
import GenresScreen from './components/Screens/GenresScreen/GenresScreen';
import NumTracksScreen from './components/Screens/NumTracksScreen/NumTracksScreen';
import CreateScreen from './components/Screens/CreateScreen/CreateScreen';
import PlayListScreen from './components/Screens/PlaylistScreen/PlaylistScreen';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('firstScreen');
  const [energyLevel, setEnergyLevel] = useState<EnergyLevel | null>(null);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [numTracks, setNumTracks] = useState<number | null>(null);

  const handleGenreClick = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres((prevSelectedGenres) =>
        prevSelectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      );
    } else if (selectedGenres.length < 5) {
      setSelectedGenres((prevSelectedGenres) => [...prevSelectedGenres, genre]);
    } else {
      alert('You can select up to 5 genres.');
    }
  };

  const renderScreen = (): JSX.Element => {
  switch (currentScreen) {
    case 'firstScreen':
      return <FirstScreen handleScreenChange={() => setCurrentScreen('energyScreen')} />;
    case 'energyScreen':
      return <EnergyScreen 
                handleScreenChange={() => setCurrentScreen('genresScreen')} 
                energyLevel={energyLevel}
                setEnergyLevel={setEnergyLevel}
              />;
    case 'genresScreen':
      return <GenresScreen 
                handleScreenChange={() => setCurrentScreen('numTracksScreen')} 
                handleGenreClick={handleGenreClick}
                selectedGenres={selectedGenres}
              />;
    case 'numTracksScreen':
      return <NumTracksScreen 
                handleScreenChange={() => setCurrentScreen('createScreen')} 
                setNumTracks={setNumTracks}
                numTracks={numTracks}
              />;
    case 'createScreen':
      return <CreateScreen 
                handleScreenChange={() => setCurrentScreen('playlistScreen')}
               />;
    case 'playlistScreen':
      return <PlayListScreen 
                energyLevel={energyLevel!}
                selectedGenres={selectedGenres}
                numTracks={numTracks!}             
             />;
    default:
      return <FirstScreen handleScreenChange={() => setCurrentScreen('energyScreen')} />;;
  }
};

  return (
    <Layout>
    {renderScreen()}
    </Layout> 
  );
};

export default App;
