'use client'

import React from 'react'
import { useContext, useEffect, useState, useCallback } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'
import CMCTableHeader from './CMCTableHeader'
import CMCTableRow from './CMCTableRow'

interface CoinData {
  cmc_rank: number,
  name: string,
  symbol: string,
  quote: {
    USD: {
      percent_change_24h: number,
      percent_change_7d: number,
      price: number,
      market_cap: number,
      volume_24h: number,
    }
  },
  total_supply: number,
  circulating_supply: number,
}

const CMCTable: React.FC = () => {
  let { getTopTenCoins } = useContext(CoinMarketContext)
  let [coinData, setCoinData] = useState<CoinData[] | null>(null)

  useEffect(() => {
    setData()
  }, [])

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTenCoins()
      let filteredResponse: CoinData[] = []

      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i]
        if (element.cmc_rank <= 10) filteredResponse.push(element)
      }

      setCoinData(filteredResponse)
    } catch (e: any) {
      console.log(e.message)
    }
  }, [getTopTenCoins])

  return (
    <div className='text-white font-bold'>
      <div className='mx-auto max-w-screen-2xl'>
        <table className='w-full'>
          <CMCTableHeader />
          <CMCTableRow starNum={0} coinName={''} coinIcon={undefined} />
          {coinData && coinData.map((coin, index) => {
            return (
              <CMCTableRow
                key={index}
                starNum={coin.cmc_rank}
                coinName={coin.name}
                coinSymbol={coin.symbol}
                coinIcon={btc}
                hRate={coin.quote.USD.percent_change_24h}
                dRate={coin.quote.USD.percent_change_7d}
                hRateIsIncrement={true}
                price={coin.quote.USD.price}
                marketCapValue={coin.quote.USD.market_cap}
                volumeCryptoValue={coin.quote.USD.volume_24h}
                volumeValue={coin.total_supply}
                circulatingSupply={coin.circulating_supply}
              />
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default CMCTable
