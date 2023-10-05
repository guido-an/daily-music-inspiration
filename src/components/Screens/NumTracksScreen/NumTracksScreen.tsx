import React, {Dispatch, SetStateAction} from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'
import NumTracksFilters from './NumTracksFilters/NumTracksFilters'
import ProgressBar from '../../Shared/ProgressBar/ProgressBar'

interface NumTracksScreenProps {
    handleScreenChange: () => void
    setNumTracks: Dispatch<SetStateAction<number | null>>;
    numTracks: number | null;
}

const NumTracksScreen: React.FC<NumTracksScreenProps> = ({handleScreenChange, setNumTracks, numTracks}) => {
   return(
    <>
     <ProgressBar currentStep={3} />
     <Title titleText='Num of tracks screen' />
     <NumTracksFilters setNumTracks={setNumTracks} />
     <Button 
        handleScreenChange={handleScreenChange} 
        buttonText="Continue" 
        disabled={numTracks === null}
     />
    </>
   )
}

export default NumTracksScreen
