// pages/api/ethPrice.ts
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch data' });
  }
}
