import React from 'react'

export default function WalletConnect({onConnect}){
  return (
    <div className="wallet-connect">
      <button onClick={onConnect}>Connect Wallet</button>
    </div>
  )
}
