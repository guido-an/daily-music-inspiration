import React from 'react'
import ScreenProps from '../../../types/ScreenProps'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'

const GenresScreen: React.FC<ScreenProps> = ({handleScreenChange}) => {
   return(
    <>
     <Title titleText='Genres screen' />
     <Button handleScreenChange={handleScreenChange} buttonText="Continue" />
    </>
   )
}

export default GenresScreen
