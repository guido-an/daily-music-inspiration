import React from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'
import ProgressBar from '../../Shared/ProgressBar/ProgressBar';
import Subtitle from '../../Shared/Subtitle/Subtitle';
import styled from 'styled-components'

interface CreateScreenProps {
   handleScreenChange: () => void;
}

const ButtonContainer = styled.div`
  margin-top: 5rem; 
`;

const CreateScreen: React.FC<CreateScreenProps> = ({ handleScreenChange }) => {
   return(
    <>
     <ProgressBar currentStep={4} />
     <Title titleText="Thanks for sharing your preferences!" /> 
     <Subtitle subtitleText="Let's check if the following songs might be for you."/>
     <ButtonContainer>
       <Button buttonText="Get your ispiration" handleScreenChange={handleScreenChange}  />
     </ButtonContainer>
    </>
   )
}

export default CreateScreen
