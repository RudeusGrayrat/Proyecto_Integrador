import { useState } from 'react';
import styles from "./Form.module.css";
import { Link } from 'react-router-dom';
import validate from "./Validation";

export default function Sigin(props) {
    const { sigin } = props

    const [errors, setErrors] = useState({})
    const [userData, setUseData] = useState({
        email: "",
        password: ""
    })
    

    const handleChange = (e) => {
        const { name, value } = e.target
        setErrors(validate({ ...userData, [name]: value }))
        setUseData(
            (data) => ({
                ...data,
                [name]: value
            })
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        sigin(userData)
    }

    return (
        <div className={styles.todo}>
            <form className={styles.form}>
                <h1>SINGIN</h1>

                <label htmlFor='email' > Email:</label >
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={userData.email}
                    onChange={handleChange} />
                {errors.e1 ? (
                    <p>{errors.e1}</p>
                ) : errors.e2 ? (
                    <p>{errors.e2}</p>
                ) : (
                    <p>{errors.e3}</p>
                )}

                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={userData.password}
                    onChange={handleChange} />
                {errors.p1 ? (
                    <p>{errors.p1}</p>
                ) : (
                    <p>{errors.p2}</p>
                )
                }

                <button type='submit'
                    className={styles.button}
                    onClick={handleSubmit}>Sing in</button>
                <p>¿Tienes una cuenta?  
                    <Link to="/">
                        Login
                    </Link>
                </p>
            </form >
        </div>
    )
}