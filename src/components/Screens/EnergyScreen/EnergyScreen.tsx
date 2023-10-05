import React, {useState, Dispatch, SetStateAction} from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'
import EnergyFilters from './EnergyFilters/EnergyFilters'
import { EnergyLevel } from '../../../types/enums'
import ProgressBar from '../../Shared/ProgressBar/ProgressBar'
import InfoText from '../../Shared/InfoText/InfoText'

interface EnergyScreenProps {
    handleScreenChange: () => void;
    energyLevel: EnergyLevel | null; 
    setEnergyLevel: Dispatch<SetStateAction<EnergyLevel | null>>;
  }

const EnergyScreen: React.FC<EnergyScreenProps> = ({
    handleScreenChange, 
    energyLevel, 
    setEnergyLevel
}) => {
   return(
    <>
     <ProgressBar currentStep={1} />
     <Title titleText='How are you feeling now?' />
     <InfoText infoText='We will search new songs based on your mood' />
     <EnergyFilters 
         energyLevel={energyLevel} 
         setEnergyLevel={setEnergyLevel}
      />
       <Button 
          handleScreenChange={handleScreenChange} 
          buttonText="Continue" 
          disabled={energyLevel === null}
      />
    </>
   )
}

export default EnergyScreen
