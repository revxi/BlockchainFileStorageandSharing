import React from 'react'
import FileCard from './FileCard'

export default function FileGrid({files=[]}){
  return (
    <div className="file-grid">
      {files.map(f=> <FileCard key={f.id||f.name} file={f} />)}
    </div>
  )
}
