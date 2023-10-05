import React, { Dispatch, SetStateAction } from 'react';
import { EnergyLevel } from '../../../../types/enums';
import OptionItem from '../../../Shared/OptionItem/OptionItem';

interface EnergyFiltersProps {
    energyLevel: EnergyLevel | null; 
    setEnergyLevel: Dispatch<SetStateAction<EnergyLevel | null>>;
}

const EnergyFilters: React.FC<EnergyFiltersProps> = ({ energyLevel, setEnergyLevel }) => {
    
    const energyOptions = [
        { value: EnergyLevel.SUPER_CHILL, label: 'Super Chill 😎' },
        { value: EnergyLevel.HAPPY_VIBES, label: 'Happy Vibes 🎶' },
        { value: EnergyLevel.EXPLOSIVE_ENERGY, label: 'Explosive Energy 💥' },
    ];

    return (
        <>
          {energyOptions.map((option) => (
              <div
                  key={option.value}
                  onClick={() => setEnergyLevel(option.value)}
              >
                  <OptionItem
                    optionText={option.label}
                    selected={option.value === energyLevel}
                  />
              </div>
          ))}
        </>
    );
};

export default EnergyFilters;
