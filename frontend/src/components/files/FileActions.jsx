import React from 'react'

export default function FileActions({onDownload,onShare}){
  return (
    <div className="file-actions">
      <button onClick={onDownload}>Download</button>
      <button onClick={onShare}>Share</button>
    </div>
  )
}
