import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMessage, setErrMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrMessage(message);
        if (message) return;

        //Signup and sing in logic
        if (!isSignInForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
                      }).then(() => {
                        const { uid, email, password, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser(
                              { 
                                uid: uid, 
                                email: email, 
                                displayName: displayName, 
                                photoURL: photoURL 
                              }
                            )
                          );
                        navigate("/browse");
                      }).catch((error) => {
                        setErrMessage(error.message);
                      });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + " - " + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            ).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + " - " + errorMessage);
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-98' src='https://images.unsplash.com/photo-1621955964441-c173e01c135b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D'
                    alt='background image ' />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-60'>
                <h1
                    className='font-bold text-lg py-4'>
                    {isSignInForm ? "Sign In " : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        className='p-2 my-4 w-full bg-gray-600 rounded-lg'
                        type='text'
                        placeholder='Full Name' />
                )}
                <input
                    ref={email}
                    className='p-2 my-4 w-full bg-gray-600 rounded-lg'
                    type='text'
                    placeholder='Email address' />
                <input
                    ref={password}
                    className='p-2 my-4 w-full bg-gray-600 rounded-lg'
                    type='password'
                    placeholder='Password' />
                <p
                    className='text-red-600 font-bold text-lg py-2'>
                    {errMessage}
                </p>
                <button
                    className='p-4 my-6 bg-red-600 w-full rounded-lg cursor-pointer'
                    onClick={handleButtonClick}>
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