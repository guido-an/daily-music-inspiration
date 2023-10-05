import React from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'
import GenresFilters from './GenresFilters/GenresFilters'
import ProgressBar from '../../Shared/ProgressBar/ProgressBar';

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
     <ProgressBar currentStep={2} />
     <Title titleText='What you want to listen today?' />
     <GenresFilters 
         handleGenreClick={handleGenreClick} 
         selectedGenres={selectedGenres}
      />
     <Button 
        handleScreenChange={handleScreenChange} 
        buttonText="Continue" 
        disabled={selectedGenres.length === 0 && true}
      />
    </>
   )
}

export default GenresScreen
