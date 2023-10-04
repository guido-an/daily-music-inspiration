import React from 'react'
import { useSpotifyRecommendations } from '../../../hooks/useSpotifyRecommendations'

interface PlaylistScreenProps {
   energyLevel: number;
   selectedGenres: string[];
   numTracks: number;
}

const PlaylistScreen: React.FC<PlaylistScreenProps> = ({
    energyLevel,
    selectedGenres,
    numTracks
}) => {
    const { recommendations, error, isLoading } = useSpotifyRecommendations({
        energyLevel, 
        selectedGenres, 
        numTracks 
    });

    if (isLoading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error loading genres</div>;
      }

   return(
    <>
     <h1>Here your playlist</h1>
    </>
   )
}

export default PlaylistScreen
