import React, { Dispatch, SetStateAction } from 'react';
import { EnergyLevel } from '../../../../types/enums';

interface EnergyFiltersProps {
    energyLevel: EnergyLevel | null; 
    setEnergyLevel: Dispatch<SetStateAction<EnergyLevel | null>>;
}

const EnergyFilters: React.FC<EnergyFiltersProps> = ({ setEnergyLevel }) => {
    
    const energyOptions = [
        { value: EnergyLevel.SUPER_CHILL, label: 'Super Chill 😎' },
        { value: EnergyLevel.HAPPY_VIBES, label: 'Happy Vibes 🎶' },
        { value: EnergyLevel.EXPLOSIVE_ENERGY, label: 'Explosive Energy 💥' },
    ];

    return (
        <div>
            <label>How do you feel?</label>
                {energyOptions.map((option) => (
                    <div
                        key={option.value}
                        onClick={() => setEnergyLevel(option.value)}
                    >
                        {option.label}
                    </div>
                ))}
        </div>
    );
};

export default EnergyFilters;
