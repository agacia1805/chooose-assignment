import type { NextApiRequest, NextApiResponse } from 'next';
import { ITrip, IPaginatedTripsResponse } from '@/app/types';
import data from '@/app/data/db.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPaginatedTripsResponse | { message: string }>
) {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 9;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  if (req.method === 'GET') {
    res.status(200).json({
      data: data.slice(startIndex, endIndex),
      hasMore: endIndex < data.length,
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
