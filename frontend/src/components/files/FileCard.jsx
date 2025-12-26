import React from 'react'

export default function FileCard({file}){
  return (
    <div className="file-card">
      <div className="file-name">{file?.name || 'Untitled'}</div>
    </div>
  )
}
