import React from 'react';

interface GenreItemProps {
  genre: string;
  handleGenreClick: (genre: string) => void
}

const GenreItem: React.FC<GenreItemProps> = ({ genre, handleGenreClick }) => {
  return <li onClick={() => {handleGenreClick(genre)}}>{genre}</li>;
};

export default GenreItem;
