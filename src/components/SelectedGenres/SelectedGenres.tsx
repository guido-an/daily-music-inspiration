import React, { useEffect} from 'react';

interface SelectedGenresProps {
  selectedGenres: string[];
}

const SelectedGenres: React.FC<SelectedGenresProps> = ({ selectedGenres }) => {
  return (
    <>
      <p><strong>Selected Genres</strong></p>
      {selectedGenres.map((genre: string) => (
        <p key={genre}>{genre}</p>
      ))}
    </>
  );
};

export default SelectedGenres;
