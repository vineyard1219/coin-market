import { NextApiRequest, NextApiResponse } from 'next'

interface ICoin {
  cmc_rank: number
  [key: string]: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiKey = 'eaff0aba-cd14-4d79-ad86-bf91c4d3fdc1'
    const limit = 10
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await response.json();

    if (response.ok) {
      const coins: ICoin[] = data.data;
      const filteredCoins: ICoin[] = coins.filter((coin) => coin.cmc_rank <= 10);
      res.status(200).json(filteredCoins);
    } else {
      throw new Error(data.status.error_message);
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}