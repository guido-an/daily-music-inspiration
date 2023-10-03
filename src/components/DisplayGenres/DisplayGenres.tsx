import React from 'react';
import { useSpotifyGenres } from '../../hooks/useSpotifyGenres';
import GenreItem from '../GenreItem/GenreItem';

interface DisplayGenresProps {
  handleGenreClick: (genre: string) => void
}

const DisplayGenres:React.FC<DisplayGenresProps> = ({ handleGenreClick }) => {
    const { genres, error, isLoading } = useSpotifyGenres();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading genres</div>;
  }

  return (
    <div>
       <h2>Spotify Genres</h2>
      <ul>
      {genres.map((genre: string, index: number) => (
          <GenreItem key={genre} genre={genre} handleGenreClick={handleGenreClick} />
        ))}
      </ul>
    </div>
  );
}

export default DisplayGenres;
