import React, { useState } from 'react';
import './Register.css'
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

const Register = () => {
    const [success,setSuccess]= useState('')
    const [userError, setUserError] = useState('')

    const auth = getAuth(app)

    const handelFormSubmit = event => {
        setSuccess('')
        setUserError('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if(!/(?=.*[0-9])/.test(password)){
            return setUserError('please add atleast one number');
            
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            setSuccess('user has been created')
            form.reset()
            console.log(user)
        })
        .catch(error=>{
            form.reset()
            setUserError(error.message)
           
        })
       
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
            {
                userError && <p>{userError}</p>
            }
            {
                success && <p>{success}</p>
            }
        </div>
    );
};

export default Register;