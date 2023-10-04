import React from 'react';
import { useSpotifyGenres } from '../../../../hooks/useSpotifyGenres';

interface GenresFiltersProps {
  handleGenreClick: (genre: string) => void
}

const GenresFilters:React.FC<GenresFiltersProps> = ({ handleGenreClick }) => {
    const { genres, error, isLoading } = useSpotifyGenres();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading genres</div>;
  }

  return (
    <div>
      <p>Select your style</p>
      <ul>
      {genres.map((genre: string, index: number) => (
          <p onClick={()=>handleGenreClick(genre)}>{genre}</p>
        ))}
      </ul>
    </div>
  );
}

export default GenresFilters;
