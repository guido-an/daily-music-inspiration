import React from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'

interface FirstScreenProps {
   handleScreenChange: () => void
}

const FirstScreen: React.FC<FirstScreenProps> = ({handleScreenChange}) => {
   return(
    <>
    <Title titleText='First screen' />
    <Button handleScreenChange={handleScreenChange} buttonText="Let's start" />
    </>
   )
}

export default FirstScreen
