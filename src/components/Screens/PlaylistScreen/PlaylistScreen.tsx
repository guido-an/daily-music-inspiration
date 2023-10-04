import React from 'react';
import { useSpotifyRecommendations } from '../../../hooks/useSpotifyRecommendations';

interface PlaylistScreenProps {
  energyLevel: number;
  selectedGenres: string[];
  numTracks: number;
}

const PlaylistScreen: React.FC<PlaylistScreenProps> = ({
  energyLevel,
  selectedGenres,
  numTracks,
}) => {
  const { recommendations, error, isLoading } = useSpotifyRecommendations({
    energyLevel,
    selectedGenres,
    numTracks,
  });

  console.log(recommendations)

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading genres</div>;
  }

  return (
    <div>
      <h1>Your Playlist</h1>
      <ul>
        {recommendations.map((track: any) => {
            const { id, external_urls, name, artists, album, preview_url } = track
            return(
                <li key={id}>
                  <a
                    href={external_urls}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                  <p>Artists: {artists.map((artist: any) => artist.name).join(', ')}</p>
                  <p>Album: {album.name}</p>
                  <audio controls src={preview_url}></audio>
                </li>
              )
        })}
      </ul>
    </div>
  );
};

export default PlaylistScreen;
