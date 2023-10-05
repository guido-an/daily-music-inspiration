import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  handleScreenChange?: () => void;
  buttonText: string;
  disabled?: boolean;
}

const StyledButton = styled.button`
  background-color: ${({theme}) => theme.colors.secondary};   
  color: ${({theme}) => theme.colors.primary};   
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  max-width: 30rem;
  &:hover {
    background-color: ${({theme}) => theme.colors.secondaryHover};   
  }
`;

const Button: React.FC<ButtonProps> = ({ handleScreenChange, buttonText, disabled }) => {
  return <StyledButton onClick={handleScreenChange} disabled={disabled}>{buttonText}</StyledButton>;
};

export default Button;
