import api from './api'

export async function uploadFile(formData, onProgress){
  // stub: implement upload with axios
  return { data: { id: Date.now() } }
}

export async function listFiles(){
  return { data: [] }
}
