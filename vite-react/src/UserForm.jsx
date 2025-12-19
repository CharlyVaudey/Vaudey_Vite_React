import { useState } from "react";

export default function UserForm(){
  const [nom, setNom] = useState('');
  const [liste, setListe] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setListe([...liste, nom]);
  }

  function supprimer(asuppr){
    setListe(liste.filter((n)=>n !== asuppr));
  }

  return(
    <div>
      <h2>Entrez votre nom</h2>
      <form onSubmit={handleSubmit}>
        <input value ={nom} onChange={e => setNom(e.target.value)}/>
        <br/>
        <button disabled={
          nom.length == 0
        }>
          Valider
        </button>
      </form>
      <h2>Liste des noms</h2>
      <ul>
        {liste.map( n => (
          <li key={n}>{n}<button onClick={()=>{supprimer(n)}}>Supprimer</button></li>
        ))}
      </ul>
    </div>
  )
}