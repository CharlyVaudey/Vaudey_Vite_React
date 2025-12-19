"use client"
import { getUsers } from "@/src/data/accessors";
import { User } from "@/src/types/usertype";
import { useEffect, useState } from "react";

export default function Page(){
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    async function load(){
      setUsers(await getUsers());
    }
    load();
  },[]);

  return (<h1>{users}</h1>)
}
