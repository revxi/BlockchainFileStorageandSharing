import { useState } from 'react'

export default function useUpload(){
  const [progress,setProgress] = useState(0)
  return {progress,setProgress}
}
