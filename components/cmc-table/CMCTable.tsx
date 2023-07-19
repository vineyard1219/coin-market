'use client'

import React, { useContext, useEffect, useState, useCallback } from 'react'
import { CoinMarketContext } from '../../context/context'

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

  return <div>CMCTable</div>
}

export default CMCTable