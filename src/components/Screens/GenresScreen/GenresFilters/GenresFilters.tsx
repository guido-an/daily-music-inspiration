import React from 'react';
import { useSpotifyGenres } from '../../../../hooks/useSpotifyGenres';
import OptionItem from '../../../Shared/OptionItem/OptionItem';

interface GenresFiltersProps {
  handleGenreClick: (genre: string) => void;
  selectedGenres: string[]
}

const GenresFilters:React.FC<GenresFiltersProps> = ({ handleGenreClick, selectedGenres }) => {
    const { genres, error, isLoading } = useSpotifyGenres();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading genres</div>;
  }

  return (
    <div>
      {genres.map((genre: string) => (
        <div 
          onClick={()=>handleGenreClick(genre)}
          key={genre}
         >
             <OptionItem
                 optionText={genre}
                 selected={selectedGenres.includes(genre)}
              />
        </div>
        ))}
    </div>
  );
}

export default GenresFilters;
