import React from 'react'

export default function ShareModal({open,onClose,children}){
  if(!open) return null
  return (
    <div className="share-modal" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()}>{children}</div>
    </div>
  )
}
