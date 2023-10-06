export default function Card(props) {
   //const {name, spacies, gender, image ,onClose}= props
   const {id, onClose, name, species, gender, image} = props
   return (
      <div>
         <button onClick={()=>onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}
