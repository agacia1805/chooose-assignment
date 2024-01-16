import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { ITrip } from '../types';

export async function fetchTrip(id: number): Promise<ITrip> {
  const response = await fetch(`/api/trips/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function useTrip(id: number): UseQueryResult<ITrip, Error> {
  return useQuery<ITrip, Error>({
    queryKey: ['trips', id],
    queryFn: () => fetchTrip(id),
  });
}
