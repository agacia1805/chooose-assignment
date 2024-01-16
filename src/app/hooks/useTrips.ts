import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  InfiniteData,
} from '@tanstack/react-query';
import { ITrip, IPaginatedTripsResponse } from '../types';

const fetchTrips = async (
  pageParam: number = 1
): Promise<IPaginatedTripsResponse> => {
  const response = await fetch(`/api/trips?page=${pageParam}&limit=9`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useTrips = (): UseInfiniteQueryResult<
  InfiniteData<IPaginatedTripsResponse, unknown>,
  Error
> => {
  return useInfiniteQuery<IPaginatedTripsResponse, Error>({
    queryKey: ['trips'],
    queryFn: ({ pageParam = 1 }) => {
      const pageNumber = typeof pageParam === 'number' ? pageParam : 1;
      return fetchTrips(pageNumber);
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
