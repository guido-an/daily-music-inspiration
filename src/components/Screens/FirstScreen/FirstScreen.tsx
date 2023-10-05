import React from 'react';
import Title from '../../Shared/Title/Title';
import Button from '../../Shared/Button/Button';
import Subtitle from '../../Shared/Subtitle/Subtitle';
import styled from 'styled-components';

interface FirstScreenProps {
  handleScreenChange: () => void;
}

const SubtitleContainer = styled.div`
  margin-top: 5rem; 
`;

const FirstScreen: React.FC<FirstScreenProps> = ({ handleScreenChange }) => {
  return (
    <>
      <Title titleText='Get your daily music inspiration' />
      <Subtitle subtitleText="The feeling you were looking for. The music app you didn't know you needed it." />
      <SubtitleContainer>
        <Subtitle subtitleText="Easy, fast and smart." />
      </SubtitleContainer>
      <Button handleScreenChange={handleScreenChange} buttonText="Let's start" />
    </>
  );
};

export default FirstScreen;
