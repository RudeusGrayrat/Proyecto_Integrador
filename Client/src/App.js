import './App.css'
import axios from 'axios'
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Error from "./components/Error/Error";
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const email = "a@gmail.com"
   const password = "1234567"
   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true)
         navigate("/home")
      }
   }
   const logout = () => {
      setAccess(false);
      navigate('/');
   };

   const [characters, setCharacters] = useState([])
   const onSearch = (id) => {
      //extra, para que no se pueda repetir
      if (characters.some((char) => char.id === Number(id))) {
         window.alert('¡Este personaje ya está en pantalla!');
         return;
      }

      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(
            ({ data }) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            }
         );
   }
   const onClose = (id) => {
      setCharacters(characters.filter(
         (char) =>
            char.id !== Number(id)
      ))
   }

   useEffect(() => {
      !access && navigate("/")
   }, [access])
   return (
      <div className='App'>
         <Nav onSearch={onSearch} logout={logout} />
         <Routes>
            <Route exatc path='/' element={<Form login={login} />} />
            <Route path="/home" element={<Cards
               characters={characters}
               onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
