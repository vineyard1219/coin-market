'use client'

import React, { useContext, useEffect, useState, useCallback } from 'react'
import { CoinMarketContext } from '../../context/context'
import CMCTableHeader from './CMCtableHeader'

interface ICoin {
  cmc_rank: number
  [key: string]: any
}

const CMCTable: React.FC = () => {
  const { getTopTenCoins } = useContext(CoinMarketContext)
  const [coinData, setCoinData] = useState<ICoin[] | null>(null)

  useEffect(() => {
    setData()
  }, [])

  const setData = useCallback(async () => {
    try {
      const apiResponse: ICoin[] = await getTopTenCoins()
      const filteredResponse: ICoin[] = []

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
    <div className= 'test-white font-bold'>
      <div className='mx-auto max-w-screen-2xl'>
        <table className='w-full'>
          <CMCTableHeader/>

          {coinData && coinData ? (
            coinData.map((coin,index)=> {
              // return(
              //   // <CMCTableRow
              //   // key = {index}
              //   // starNum = {coin.cmc_rank}
              //   // coinName = {coin.name}
              //   // coinSymbol = {btc}
              //   // showBuy = {true}
              //   // hRate = {coin.quote.USD.percent_change_24H}
              //   // dRate = {coin.quote.USD.percent_change_7d}
              //   // hRateIsIncrement = {true}
              //   // price = {coin.quote.USD.price}
              //   // marketCapValue = {coin.quote.USD.market_cap}
              //   // volumeCryptoValue = {coin.quote.USD.volume_24h}
              //   // volumeValue={coin.total_supply}
              //   // circulatingSupply={coin.circulating_supply}               
              //   // />
              // )
            })
          ) :(
            <></>
          )}
        </table>
      </div>
    </div>
  )
}

export default CMCTable