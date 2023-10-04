import React, { Dispatch, SetStateAction } from 'react';

interface NumTracksFiltersProps {
  setNumTracks: Dispatch<SetStateAction<number | null>>;
}

const NumTracksFilters: React.FC<NumTracksFiltersProps> = ({ setNumTracks }) => {
  const trackOptions = [10, 15, 20, 25, 30];

  const handleTrackClick = (track: number) => {
    setNumTracks(track);
  };

  return (
    <div>
      <label>How many tracks?</label>
      <div className="track-options">
        {trackOptions.map((track) => (
          <div
            key={track}
            onClick={() => handleTrackClick(track)}
          >
            {track}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumTracksFilters;
