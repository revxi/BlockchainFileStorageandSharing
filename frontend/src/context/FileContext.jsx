import React, { createContext, useState } from 'react'

export const FileContext = createContext(null)

export function FileProvider({children}){
  const [files,setFiles] = useState([])
  return <FileContext.Provider value={{files,setFiles}}>{children}</FileContext.Provider>
}
