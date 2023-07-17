// coinmarketcontext를 생성하고 coinmarketprovider 컴포넌트를 정의함
// 이 컴포넌트는 coinmarketcap api에서 상위10개의 코인 데이터를 가져오는 getTopTenCoins 함수를 제공함

'use client'

import { createContext, useState, useEffect } from 'react'

export const CoinMarketContext = createContext()
// createContext를 사용하여 CoinMarketContext를 생성합니다. createContext 함수는 React 컨텍스트를 생성하는 함수로, 하위 컴포넌트에서 상위 컴포넌트로 데이터를 전달하는 데 사용됨

export const CoinMarketProvider = ({children}) => {
// CoinMarketProvider 컴포넌트는 getTopTenCoins 함수를 정의합니다. 
// 이 함수는 API를 호출하여 /api/getTopTen 경로로부터 데이터를 가져오고, 가져온 데이터 중 data.data를 반환함

  const getTopTenCoins = async () => {
    try {
        const res = await fetch('/api/getTopTen')
        const data = await res.json()
        return data.data.data
    } catch(e){
      console.log(e.message)
    }
  }
  // CoinMarketContext.Provider를 사용하여 하위 컴포넌트에 데이터를 전달합니다. value 속성을 사용하여 getTopTenCoins 함수를 포함한 값을 제공합니다.

  return(
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
  // 하위 컴포넌트들을 CoinMarketContext.Provider로 감싸고, {children}으로 표시합니다. 이렇게 하면 하위 컴포넌트에서 CoinMarketContext의 값을 사용할 수 있습니다.
}