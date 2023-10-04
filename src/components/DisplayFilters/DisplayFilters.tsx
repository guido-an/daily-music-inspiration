import React from 'react';
import { EnergyLevel } from '../../types/enums';

interface DisplayFiltersProps {
  numTracks: number;
  energyLevel: EnergyLevel;
  setNumTracks: React.Dispatch<React.SetStateAction<number>>;
  setEnergyLevel: React.Dispatch<React.SetStateAction<number>>;
}

const DisplayFilters: React.FC<DisplayFiltersProps> = ({ numTracks, energyLevel, setNumTracks, setEnergyLevel }) => {
  return (
    <div>
      <div>
        <label htmlFor="numTracks">How many tracks?</label>
        <select
          id="numTracks"
          value={numTracks}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setNumTracks(parseInt(e.target.value, 10))}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={30}>30</option>
        </select>
      </div>
      <div>
        <label htmlFor="energyLevel">How do you feel?</label>
        <select
          id="energyLevel"
          value={energyLevel}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setEnergyLevel(parseFloat(e.target.value))}
        >
          <option value={EnergyLevel.SUPER_CHILL}>Super Chill 😎</option>
          <option value={EnergyLevel.HAPPY_VIBES}>Happy Vibes 🎶</option>
          <option value={EnergyLevel.EXPLOSIVE_ENERGY}>Explosive Energy 💥</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayFilters;
