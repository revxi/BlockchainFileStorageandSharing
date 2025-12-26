import React from 'react'
import FileGrid from '../components/files/FileGrid'

export default function Dashboard(){
  const files = [{id:1,name:'Document.pdf'},{id:2,name:'Photo.png'}]
  return (
    <main>
      <h1>Dashboard</h1>
      <FileGrid files={files} />
    </main>
  )
}
