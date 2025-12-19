'use server'

const users = ["26"];

export async function getUsers(){
  return users;
}


export async function setUsers(u: string){
  users.push(u)
}