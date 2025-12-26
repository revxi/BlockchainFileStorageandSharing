import React from 'react'

export default function FilePreview({file}){
  if(!file) return <div>No preview</div>
  return (
    <div className="file-preview">Preview: {file.name}</div>
  )
}
