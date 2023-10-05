import React, {Dispatch, SetStateAction} from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'
import NumTracksFilters from './NumTracksFilters/NumTracksFilters'
import ProgressBar from '../../Shared/ProgressBar/ProgressBar'
import InfoText from '../../Shared/InfoText/InfoText'

interface NumTracksScreenProps {
    handleScreenChange: () => void
    setNumTracks: Dispatch<SetStateAction<number | null>>;
    numTracks: number | null;
}

const NumTracksScreen: React.FC<NumTracksScreenProps> = ({
   handleScreenChange, 
   setNumTracks, 
   numTracks
}) => {
   return(
    <>
     <ProgressBar currentStep={3} />
     <Title titleText='How many new songs would you like to discover?' />
     <InfoText infoText='Maximum number:' />
     <NumTracksFilters 
        setNumTracks={setNumTracks} 
        numTracks={numTracks}
      />
     <Button 
        handleScreenChange={handleScreenChange} 
        buttonText="Continue" 
        disabled={numTracks === null}
     />
    </>
   )
}

export default NumTracksScreen
