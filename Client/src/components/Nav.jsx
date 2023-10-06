import SearchBar  from "./SearchBar";
import  styles  from "./Nav.module.css";
export default function Nav(props) {
    const {onSearch} = props
    return(
        <div className={styles.nave}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}