import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css';

export default function Nav(props) {
   const { onSearch, logout } = props;
   const location = useLocation()
   if (location.pathname === '/') {
      return null;
   }
   return (
      <div className={styles.Nav}>
         <NavLink to="/home"
            className={styles.navlink}>
            <button className={styles.button}>
               Home
            </button>
         </NavLink>

         <NavLink to="/about"
            className={styles.navlink}>
            <button
               className={styles.button}>
               About
            </button>
         </NavLink>

         <NavLink to="/favorites"
            className={styles.navlink}>
            <button className={styles.button}>
               Favorites
            </button>
         </NavLink>
         <SearchBar onSearch={onSearch} />
         <button onClick={logout}
            className={styles.button} >
            Log Out
         </button>
      </div>
   );
}
