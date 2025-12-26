import React from 'react'

export default function DropZone({onDrop}){
  return (
    <div className="dropzone" onDrop={e=>{e.preventDefault(); onDrop?.(e)}} onDragOver={e=>e.preventDefault()}>
      Drop files here
    </div>
  )
}
