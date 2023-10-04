import useSWR from 'swr';

const SPOTIFY_API_ENDPOINT = process.env.REACT_APP_SPOTIFY_API_ENDPOINT;

export interface SpotifyRecommendationsOptions {
  energyLevel: number;
  selectedGenres: string[];
  numTracks: number;
}

export function useSpotifyRecommendations({
  energyLevel,
  selectedGenres,
  numTracks,
}: SpotifyRecommendationsOptions) {
  const queryParams = new URLSearchParams({
    seed_genres: selectedGenres.join(','),
    target_energy: energyLevel.toString(),
    limit: numTracks.toString(),
  });

  const url = `${SPOTIFY_API_ENDPOINT}/recommendations?${queryParams.toString()}`;

  const { data, error } = useSWR(url);

  const filteredRecommendations = data?.tracks.filter(
    (track: any) => track.preview_url
  ) || [];

  return {
    recommendations: filteredRecommendations,
    error,
    isLoading: !data && !error,
  };
}
