import React from 'react'

export default function TxStatus({status='pending'}){
  return <span className={`tx-status tx-${status}`}>{status}</span>
}
