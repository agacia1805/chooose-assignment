import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  InfiniteData,
} from '@tanstack/react-query';
import { ITrip, IPaginatedTripsResponse } from '../types';
import { useIsMobile } from '../utils/useIsMobile';

const fetchTrips = async (
  pageParam: number = 1,
  limit: number = 9
): Promise<IPaginatedTripsResponse> => {
  const response = await fetch(`/api/trips?page=${pageParam}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useTrips = (): UseInfiniteQueryResult<
  InfiniteData<IPaginatedTripsResponse, unknown>,
  Error
> => {
  const isMobile = useIsMobile();
  const limit: number = isMobile ? 4 : 9;

  return useInfiniteQuery<IPaginatedTripsResponse, Error>({
    queryKey: ['trips'],
    queryFn: ({ pageParam = 1 }) => {
      const pageNumber = typeof pageParam === 'number' ? pageParam : 1;
      return fetchTrips(pageNumber, limit);
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
