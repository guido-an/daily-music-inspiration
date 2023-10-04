import React from 'react'
import ScreenProps from '../../../types/ScreenProps'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'

const PlayListScreen: React.FC<ScreenProps> = ({handleScreenChange}) => {
   return(
    <>
     <Title titleText='Generate playlist' /> 
     <Button handleScreenChange={handleScreenChange} buttonText="Generate playlist" />
    </>
   )
}

export default PlayListScreen
