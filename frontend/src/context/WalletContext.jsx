import React, { createContext, useState } from 'react'

export const WalletContext = createContext(null)

export function WalletProvider({children}){
  const [address,setAddress] = useState(null)
  return <WalletContext.Provider value={{address,setAddress}}>{children}</WalletContext.Provider>
}
