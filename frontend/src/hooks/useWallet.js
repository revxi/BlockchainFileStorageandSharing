import { useState } from 'react'

export default function useWallet(){
  const [address,setAddress] = useState(null)
  return {address,setAddress}
}
