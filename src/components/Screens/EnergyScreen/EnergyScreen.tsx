import React from 'react'
import ScreenProps from '../../../types/ScreenProps'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'

const EnergyScreen: React.FC<ScreenProps> = ({handleScreenChange}) => {
   return(
    <>
     <Title titleText='Energy screen' />
     <Button handleScreenChange={handleScreenChange} buttonText="Continue" />
    </>
   )
}

export default EnergyScreen
