import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-98' src='https://images.unsplash.com/photo-1621955964441-c173e01c135b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D'
                    alt='background image ' />
            </div>
            <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-60'>
                <h1
                    className='font-bold text-lg py-4'>
                    {isSignInForm ? "Sign In " : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        className='p-2 my-4 w-full bg-gray-600 rounded-lg'
                        type='text'
                        placeholder='Full Name' />
                )}
                <input
                    className='p-2 my-4 w-full bg-gray-600 rounded-lg'
                    type='text'
                    placeholder='Email address' />
                <input
                    className='p-2 my-4 w-full bg-gray-600 rounded-lg'
                    type='passwprd'
                    placeholder='Password' />
                <button
                    className='p-4 my-6 bg-red-600 w-full rounded-lg cursor-pointer'>
                    {isSignInForm ? "Sign In " : "Sign Up"}
                </button>
                <p
                    className='py-4 cursor-pointer'
                    onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now " : "Already Register? Sign In Now"}
                </p>
            </form>
        </div>
    )
}

export default Login;