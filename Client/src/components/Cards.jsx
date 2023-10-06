import Card from './Card';

export default function Cards(props) {
   const { characters , onClose} = props;
   return (
      <div>
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
