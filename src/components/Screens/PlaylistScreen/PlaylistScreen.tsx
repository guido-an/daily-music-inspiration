import React from 'react';
import { useSpotifyRecommendations } from '../../../hooks/useSpotifyRecommendations';
import Title from '../../Shared/Title/Title';
import Subtitle from '../../Shared/Subtitle/Subtitle';
import styled from 'styled-components';
import InfoText from '../../Shared/InfoText/InfoText';
import ProgressBar from '../../Shared/ProgressBar/ProgressBar';

interface PlaylistScreenProps {
  energyLevel: number;
  selectedGenres: string[];
  numTracks: number;
}

const StyledPlaylistContainer = styled.div`
  margin-bottom: 2.5rem;
  border: 1px solid #fafafa;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledTrackName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StyledArtists = styled.div`
  color: #e5c571;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

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

  const subtitleText =
    recommendations.length === 0
      ? 'found no songs'
      : recommendations.length === 1
      ? 'found 1 song'
      : `found ${recommendations.length} songs`;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading genres</div>;
  }

  return (
    <div>
      <ProgressBar currentStep={5} />
      <Title titleText="Here's your daily music inspiration!" />
      <Subtitle subtitleText={`We ${subtitleText} for you.`} />
      {recommendations.length === 0 ? (
        <InfoText infoText='Sorry, no songs found with these criteria. Please try again.' />
      ) : (
        recommendations.map((track: any) => {
          const { id, name, artists, preview_url } = track;
          return (
            <StyledPlaylistContainer key={id}>
              <StyledTrackName>{name}</StyledTrackName>
              <StyledArtists>{artists.map((artist: any) => artist.name).join(', ')}</StyledArtists>
              <audio controls src={preview_url}></audio>
            </StyledPlaylistContainer>
          );
        })
      )}
    </div>
  );
};

export default PlaylistScreen;
