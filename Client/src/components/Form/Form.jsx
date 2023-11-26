import { useState } from 'react';
import validate from "./Validation";
import styles from './Form.module.css';

export default function Form(props) {
    const {login} = props

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
    const handleSubmit = (e) =>{
        e.preventDefault()
        login(userData)
    }

    return (
        <div className={styles.todo}>
            <form className={styles.form}>
                <h1>LOGIN</h1>

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
                    onClick={handleSubmit}>Submit</button>
            </form >
        </div>
    );
}
