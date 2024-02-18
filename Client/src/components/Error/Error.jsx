import styles from './Error.module.css';

export default function Error() {
   return (
      <div className={styles.error}>
         <h1>Error 404</h1>
         <p>La página que buscas no existe.</p>
      </div>
   );
}