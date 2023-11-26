import { useState } from "react";
import styles from "./SearchBar.module.css" 

export default function SearchBar(props) {
   const {onSearch} = props
   const [id, setId] = useState([])
   const handleChange = (e)=>{
      setId([e.target.value])
   }
    return (
       <div className={styles.searchBar}>
          <input type='search' value={id} onChange={handleChange}/>
          <button onClick={()=>onSearch(id)}>Agregar</button>
       </div>
    );
 }
 