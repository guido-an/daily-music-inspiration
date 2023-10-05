import React from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'

interface FirstScreenProps {
   handleScreenChange: () => void
}

const FirstScreen: React.FC<FirstScreenProps> = ({handleScreenChange}) => {
   return(
    <>
    <Title titleText='Get your daily music ispiration' />
    <p>Find the feeling you were looking for. The music app you didn't know you needed it.</p>
    <p>Easy, fast and smart.</p>
    <Button handleScreenChange={handleScreenChange} buttonText="Let's start" />
    </>
   )
}

export default FirstScreen
