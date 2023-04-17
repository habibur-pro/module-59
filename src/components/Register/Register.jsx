import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>

            <form action="" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="email"
                    placeholder='Your Email'

                />
                <input
                    type="password"
                    placeholder='Your Password'

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