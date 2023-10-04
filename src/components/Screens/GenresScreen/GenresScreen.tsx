import React from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'
import GenresFilters from './GenresFilters/GenresFilters'

interface GenresScreenProps { 
    handleScreenChange: () => void;
    handleGenreClick: (genre: string) => void;
    selectedGenres: string[]
}

const GenresScreen: React.FC<GenresScreenProps> = ({
    handleScreenChange, 
    handleGenreClick,
    selectedGenres
}) => {
   return(
    <>
     <Title titleText='Genres screen' />
     <GenresFilters handleGenreClick={handleGenreClick} />
     <Button 
        handleScreenChange={handleScreenChange} 
        buttonText="Continue" 
        disabled={selectedGenres.length === 0 && true}
      />
    </>
   )
}

export default GenresScreen
