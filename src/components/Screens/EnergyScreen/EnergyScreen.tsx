import React, {useState, Dispatch, SetStateAction} from 'react'
import Title from '../../Shared/Title/Title'
import Button from '../../Shared/Button/Button'
import EnergyFilters from './EnergyFilters/EnergyFilters'
import { EnergyLevel } from '../../../types/enums'

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
     <Title titleText='How do you feel now?' />
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
