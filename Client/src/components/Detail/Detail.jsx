import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Detail.module.css';

export default function Detail(props) {
   const { id } = useParams()
   const [character, setCharacter] = useState({})
   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         }
      );
      return setCharacter({});
   }, [id]);

   return (
      <div className={styles.detail}>
         <div className={styles.info}>
            <h1>{character.name}</h1>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin && character.origin.name}</h3>
         </div>
         <div className={styles.imagen}>
            <img src={character.image} alt="" />
         </div>
      </div>
   );
}
