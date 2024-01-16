export interface ITrip {
  id: number;
  photoUrl: string;
  title: string;
  subtitle: string;
  countries: string[];
  days: number;
  co2kilograms: number;
  rating: number;
  description: string;
  advantages: { title: string; description: string }[];
}

export interface IPaginatedTripsResponse {
  data: ITrip[];
  hasMore: boolean;
}
