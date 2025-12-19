import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Compteur from './Compteur.jsx';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';
import Board from './Board.jsx';
import Accueil from './pages/Accueil.jsx';
import Profil from './pages/Profil.jsx';
import Contact from './pages/Contact.jsx';
import Layout from './Layout.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="profil" element={<Profil />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
