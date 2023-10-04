import React from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'

interface CreateScreenProps {
   handleScreenChange: () => void;
}

const CreateScreen: React.FC<CreateScreenProps> = ({ handleScreenChange }) => {
   return(
    <>
     <Title titleText='Generate playlist' /> 
     <Button buttonText="Generate playlist" handleScreenChange={handleScreenChange}  />
    </>
   )
}

export default CreateScreen
