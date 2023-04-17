import React from 'react';
import './Register.css'

const Register = () => {

    const handelFormSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div>
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