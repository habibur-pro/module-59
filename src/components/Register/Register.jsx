import React from 'react';
import './Register.css'
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

const Register = () => {

    const auth = getAuth(app)

    const handelFormSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
       
    }

    return (
        <div >
            <h3>Please Register</h3>

            <form action="" onSubmit={handelFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="email"
                    placeholder='Your Email'
                    name='email'

                />
                <input
                    type="password"
                    placeholder='Your Password'
                    name='password'

                />
                <input
                    type="submit"
                    value='Register'

                />

            </form>
        </div>
    );
};

export default Register;