import React from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'
import ProgressBar from '../../Shared/ProgressBar/ProgressBar';

interface CreateScreenProps {
   handleScreenChange: () => void;
}

const CreateScreen: React.FC<CreateScreenProps> = ({ handleScreenChange }) => {
   return(
    <>
     <ProgressBar currentStep={4} />
     <Title titleText='Generate playlist' /> 
     <Button buttonText="Generate playlist" handleScreenChange={handleScreenChange}  />
    </>
   )
}

export default CreateScreen
