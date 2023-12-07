import './App.css'
import axios from 'axios'
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Sigin from "./components/Form/Sigin";
import Favorites from "./components/Favorites/Favorites";
import Error from "./components/Error/Error";
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const [characters, setCharacters] = useState([])

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         console.error(error)
      }
   }

   async function sigin(userData) {
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const { data } = await axios.post(URL, userData)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         console.error(error)
      }
   }

   const logout = () => {
      setAccess(false);
      navigate('/');
   };

   const onSearch = async (id) => {
      //extra, para que no se pueda repetir
      if (characters.some((char) => char.id === Number(id))) {
         window.alert('¡Este personaje ya está en pantalla!');
         return;
      }
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      try {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         console.error(error)
      }

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
            <Route path='/' element={<Form login={login} />} />
            <Route path='/sigin' element={<Sigin sigin={sigin} />} />
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
