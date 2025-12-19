import { Link } from "react-router-dom"
import { Outlet } from "react-router";
export default function Accueil()
{
  return (
    <div>
      <Outlet/>
    </div>
  )
}