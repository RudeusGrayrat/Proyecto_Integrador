import Card from '../Card/Card';
import  styles  from "./Cards.module.css";

export default function Cards(props) {
   const { characters , onClose} = props;
   return (
      <div className={styles.Cards}>
         {characters.map((char)=>{
            return(
               <Card 
                  key={char.id}
                  id = {char.id}
                  name = {char.name}
                  species = {char.species}
                  gender = {char.genter}
                  image = {char.image}
                  onClose = {onClose}
               />
         )})}
      </div>
   );
}
