import useSWR from 'swr';

const SPOTIFY_API_ENDPOINT = process.env.REACT_APP_SPOTIFY_API_ENDPOINT;

export function useSpotifyGenres() {
  const { data, error } = useSWR(
    `${SPOTIFY_API_ENDPOINT}/recommendations/available-genre-seeds`
  );

  const genres = data?.genres || [];

  return {
    genres,
    error,
    isLoading: !data && !error,
  };
}
