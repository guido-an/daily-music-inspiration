export const handleGenreClick = (
    genre: string,
    selectedGenres: string[],
    setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres((prevSelectedGenres: string[]) =>
        prevSelectedGenres.filter((selectedGenre: string) => selectedGenre !== genre)
      );
    } else {
      setSelectedGenres((prevSelectedGenres: string[]) => [...prevSelectedGenres, genre]);
    }
  };