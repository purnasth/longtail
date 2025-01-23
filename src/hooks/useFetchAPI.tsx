
// ! Refactor the useFetchAPI hook to cache data in localStorage and use etag for conditional fetching: Refetch api on page reload if data is stale
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface CachedData {
  data: any;
  etag: string;
}

const useFetchAPI = (key: string, url: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: async (): Promise<any> => {
      const cachedData: CachedData | null = JSON.parse(localStorage.getItem(key) || 'null');

      const headers: Record<string, string> = {};
      if (cachedData?.etag) {
        headers['If-None-Match'] = cachedData.etag;
      }

      try {
        const response = await axios.get(url, { headers });
        const etag: string = response.headers.etag;

        // Save new data and etag in localStorage
        localStorage.setItem(
          key,
          JSON.stringify({
            data: response.data,
            etag,
          } as CachedData),
        );

        return response.data;
      } catch (error: any) {
        if (error.response?.status === 304) {
          // Use cached data if server returns 304
          return cachedData!.data;
        }
        throw error;
      }
    },
    staleTime: Infinity,
  });
};

export default useFetchAPI;
