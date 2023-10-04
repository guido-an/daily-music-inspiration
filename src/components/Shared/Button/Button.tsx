import React from 'react'

interface ButtonProps {
    handleScreenChange?: () => void;
    buttonText: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({handleScreenChange, buttonText, disabled}) => {
   return <button onClick={handleScreenChange} disabled={disabled}>{buttonText}</button>
}

export default Button
