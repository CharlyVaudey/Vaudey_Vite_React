import { Link } from "react-router-dom"
export default function Accueil()
{
  return (
      <>
      <h1>Accueil</h1>
      <br/>
      <Link to="/contact">Contact</Link>
      <br/>
      <Link to="/profil">Profil</Link>
      </>
    )
}