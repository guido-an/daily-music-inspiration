import { fetcher } from '../utils/apiUtils';

export const swrConfig = {
    fetcher,
    dedupingInterval: 86400000, // Cache data for 24 hours
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  };