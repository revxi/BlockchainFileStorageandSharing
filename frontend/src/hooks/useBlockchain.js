import { useState } from 'react'

export default function useBlockchain(){
  const [txStatus,setTxStatus] = useState(null)
  return {txStatus,setTxStatus}
}
