import React from 'react'

export default function UploadModal({open,onClose,children}){
  if(!open) return null
  return (
    <div className="upload-modal" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()}>{children}</div>
    </div>
  )
}
