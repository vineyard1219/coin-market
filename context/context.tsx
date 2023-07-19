'use client'

import React, { createContext, FC, ReactNode } from 'react';

interface ICoinMarketContext {
  getTopTenCoins: () => Promise<any>;
}

// 기본값을 설정하여 createContext() 호출을 안전하게 만듭니다.
export const CoinMarketContext = createContext<ICoinMarketContext>({
  getTopTenCoins: async () => { throw new Error("Not implemented"); }
});

interface ICoinMarketProviderProps {
  children: ReactNode;
}

export const CoinMarketProvider: FC<ICoinMarketProviderProps> = ({children}) => {
  const getTopTenCoins = async () => {
    try {
        const res = await fetch('/api/getTopTen');
        const data = await res.json();
        return data.data.data;
    } catch(e: any){
      console.log(e.message);
    }
  };

  return(
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  );
}
