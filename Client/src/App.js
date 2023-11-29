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
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const [characters, setCharacters] = useState([])

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   const logout = () => {
      setAccess(false);
      navigate('/');
   };

   const onSearch = (id) => {
      //extra, para que no se pueda repetir
      if (characters.some((char) => char.id === Number(id))) {
         window.alert('¡Este personaje ya está en pantalla!');
         return;
      }

      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
