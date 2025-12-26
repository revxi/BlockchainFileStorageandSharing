import React from 'react'

export default function AccessList({items=[]}){
  return (
    <ul className="access-list">
      {items.map(i=> <li key={i.id||i.user}>{i.user}</li>)}
    </ul>
  )
}
