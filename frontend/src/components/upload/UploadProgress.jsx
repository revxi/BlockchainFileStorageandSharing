import React from 'react'

export default function UploadProgress({progress=0}){
  return (
    <div className="upload-progress">Uploading: {progress}%</div>
  )
}
