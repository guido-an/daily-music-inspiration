const SPOTIFY_ACCESS_TOKEN = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;

export const fetcher = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};
