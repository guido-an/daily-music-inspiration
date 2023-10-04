import React from 'react'
import ScreenProps from '../../../types/ScreenProps'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'

const FirstScreen: React.FC<ScreenProps> = ({handleScreenChange}) => {
   return(
    <>
    <Title titleText='First screen' />
    <Button handleScreenChange={handleScreenChange} buttonText="Let's start" />
    </>
   )
}

export default FirstScreen
