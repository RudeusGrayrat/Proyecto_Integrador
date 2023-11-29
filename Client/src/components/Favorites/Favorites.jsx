import { connect } from "react-redux";
import Card from "../Card/Card"
import styles from "../Cards/Cards.module.css"

const Fav = (props) => {
    const { myFavorites } = props;

    return (
        <div className={styles.cards}>
            {myFavorites.map((char) => {
                return (
                    <Card
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin.name}
                        image={char.image}
                    />
                );
            })}
        </div>
    )
}
const mapStateToProps = (state) => ({
    myFavorites: state.myFavorites
})

export default connect(mapStateToProps, null)(Fav)