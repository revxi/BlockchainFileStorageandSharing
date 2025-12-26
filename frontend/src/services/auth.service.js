import api from './api'

export async function login(credentials){
  // stub
  return { data: { user: { id:1, name:'Demo' } } }
}

export async function register(data){
  return { data: { user: { id:2, name:'New' } } }
}
