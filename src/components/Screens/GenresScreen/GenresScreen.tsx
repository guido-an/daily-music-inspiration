import React from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'
import GenresFilters from './GenresFilters/GenresFilters'
import ProgressBar from '../../Shared/ProgressBar/ProgressBar';
import InfoText from '../../Shared/InfoText/InfoText';

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
     <Title titleText='Which music would you like to listen today?' />
     <InfoText infoText='You can select up to 3 genres' />
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
