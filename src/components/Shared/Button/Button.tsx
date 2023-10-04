import React from 'react'

interface ButtonProps {
    handleScreenChange?: () => void;
    buttonText: string
}

const Button: React.FC<ButtonProps> = ({handleScreenChange, buttonText}) => {
   return <button onClick={handleScreenChange}>{buttonText}</button>
}

export default Button
