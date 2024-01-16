import type { NextApiRequest, NextApiResponse } from 'next';
import { ITrip } from '@/app/types';
import data from '@/app/data/db.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITrip | { message: string }>
) {
  const { id } = req.query;

  const trip = data.find((t) => t.id === parseInt(id as string));

  if (trip) {
    res.status(200).json(trip);
  } else {
    res.status(404).json({ message: `Trip with id ${id} not found` });
  }
}
