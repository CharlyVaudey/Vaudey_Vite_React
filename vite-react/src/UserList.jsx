import { useEffect, useState } from 'react';
import Users from './getUsers.js';
import User from './User.jsx'

export default function UserList (){
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function load(){
      const data = await Users();
      setUsers(data);
      setLoading(false);
    }
    setTimeout(load,3000);
  },[]);

return (
  <div>
    <h2>Liste des utilisateurs</h2>
    {loading ? (
      <p>Chargement...</p>
    ) : (
    <ul>
      {users.map(user => (
          <User key={user.id} user={user}/>
      ))}
    </ul>
    )}
  </div>
  )
}