import React, { Dispatch, SetStateAction } from 'react';
import OptionItem from '../../../Shared/OptionItem/OptionItem';

interface NumTracksFiltersProps {
  setNumTracks: Dispatch<SetStateAction<number | null>>;
  numTracks: number | null
}

const NumTracksFilters: React.FC<NumTracksFiltersProps> = ({ setNumTracks, numTracks }) => {
  const trackOptions = [2, 4, 6, 8];

  const handleTrackClick = (track: number) => {
    setNumTracks(track);
  };

  return (
      <div>
        {trackOptions.map((trackNum) => (
          <div
            key={trackNum}
            onClick={() => handleTrackClick(trackNum)}
          >
            <OptionItem optionText={trackNum} selected={numTracks === trackNum}/>
          </div>
        ))}
      </div>
  );
};

export default NumTracksFilters;
