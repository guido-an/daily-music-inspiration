import React from 'react'
import styled from 'styled-components';
interface ButtonProps {
    handleScreenChange?: () => void;
    buttonText: string;
    disabled?: boolean;
}

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button: React.FC<ButtonProps> = ({handleScreenChange, buttonText, disabled}) => {
   return <StyledButton onClick={handleScreenChange} disabled={disabled}>{buttonText}</StyledButton>
}

export default Button
