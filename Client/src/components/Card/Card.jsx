import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

const Card = (props) => {
   const { id, onClose, name, status, species,
      gender, origin, image, addFav,
      removeFav, myFavorites } = props

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false)
         removeFav(id)
      }
      if (isFav === false) {
         setIsFav(true)
         addFav(props)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.card}>
         <div className={styles.divButton}>
            <button onClick={handleFavorite}>
               {isFav ? '❤️' : '🤍'}
               </button>
            <button
               className={styles.buttonX}
               onClick={() => onClose(id)}>
               X
            </button>
         </div>
         <Link
            to={`/detail/${id}`}>
            <h3>{name}</h3>
         </Link>
         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin}</h3>
         <img src={image} alt='' />
      </div>
   );
}
const mapStateToProps = (state) => ({
   myFavorites: state.myFavorites,
});
const mapDispatchToProps = {
   addFav,
   removeFav
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)