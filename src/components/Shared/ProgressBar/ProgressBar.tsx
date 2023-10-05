import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  currentStep: number;
}

const StyledProgressBar = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: #f7f7f7;
  border-radius: 10px;
`;

const FilledBar = styled.div<{ width: string }>`
  height: 100%;
  width: ${(props) => props.width};
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 10px;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const progress = (currentStep / 4) * 100;

  return (
    <StyledProgressBar>
      <FilledBar width={`${progress}%`} />
    </StyledProgressBar>
  );
};

export default ProgressBar;
