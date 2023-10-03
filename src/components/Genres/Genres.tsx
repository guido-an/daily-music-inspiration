import React from 'react';
import { useSpotifyGenres } from '../../hooks/useSpotifyGenres';

const Genres:React.FC = () => {
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
        {genres.map((genre: string) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;
