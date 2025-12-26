import React from 'react'

export default function Tooltip({children, text}){
  return (
    <span className="tooltip" aria-label={text}>{children}</span>
  )
}
