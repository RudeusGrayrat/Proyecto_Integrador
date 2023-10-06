import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import  styles  from "./components/Nav.module.css";
import axios from "axios";

function App () {
  const [characters, setCharacters] = useState([])
  
  const onSearch = (id)=>{
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response)=>{
        const data = response.data
        if (data.name) {
          //const characterToAdd = example.find((character) => character.id === parseInt(id));
          setCharacters([...characters, data])
        } else {
          throw Error
        }
      })
  }
    
  //eliminar
  const onClose = (id)=>{
    const filtrado = characters.filter((char)=> 
    {return char.id !== id})
    setCharacters(filtrado)
  }
    
  return (
    <div className={styles.todo} style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <hr />
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
      
    </div>
  )
}

export default App