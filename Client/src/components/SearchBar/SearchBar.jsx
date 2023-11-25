import { useState } from "react";

export default function SearchBar(props) {
   const [id, setId] = useState('');
   //const [Nombre, setNombre] = useState('') //en esta homework usa nombre 
   //pero me gusta mas como lo hizo Ivan con los id
   // 
   const handleChange = (e)=>{
      setId(e.target.value)
   }
  const {onSearch} = props
   return (
      <div>
         <input type='search'  onChange={handleChange}/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
