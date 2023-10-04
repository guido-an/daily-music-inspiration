import React, { useEffect} from 'react';

interface SelectedGenresProps {
  selectedGenres: string[];
}

const SelectedGenres: React.FC<SelectedGenresProps> = ({ selectedGenres }) => {
  return (
    <>
      {selectedGenres.map((genre: string) => (
        <p key={genre}>{genre}</p>
      ))}
    </>
  );
};

export default SelectedGenres;
