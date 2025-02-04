import React, { useState, useRef } from "react"
import Header from "./Header"
import checkValidData from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from "../utils/firebase"
import { useNavigate} from "react-router-dom"

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    // const fullName = useRef(null)
        const navigate = useNavigate()
    
    const toggleSignUp = () => {
        isSignIn ? setIsSignIn(false) : setIsSignIn(true)

        // setIsSignIn(!isSignIn)
    }
    const handleBtnClick = () => {
        const msg = checkValidData(email.current.value,password.current.value)
        // console.log(email.current.value)
        // console.log(password.current.value)
        // console.log(fullName.current.value)
        setErrorMsg(msg)    
        if(msg) return;

        // then do sign up/ sign in
        if(!isSignIn){
            // signup form logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    // displayName: fullName.current.value
                  }).then(() => {
                    // Profile updated!
                    navigate("/browse")
                  }).catch((error) => {
                    // An error occurred
                    setErrorMsg(error.msg)
                  });                  
                console.log(user);
                navigate("/browse")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage);
                
                // ..
            });

        }
        else{
            // signin form logic
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value,
                // fullName.current.value
            )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse")

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage);
            });
        }

    }
    
    return(
        <>
        <Header/>
        <div className="bg-black h-lvh overflow-hidden z-0 relative">
        <div className="absolute bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg')] w-full h-full bg-cover bg-no-repeat bg-gradient-to-b bg-black">
        </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className="absolute p-12 my-24 right-0 top-0 left-0 w-100 bg-[#000000b3] ml-auto mr-auto">
                <h4 className="text-4xl text-white font-bold mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h4>

                {!isSignIn && <input type="text" 
                placeholder="Full Name" 
                className="p-4 m-2 text-white border border-gray-400 w-full rounded-lg" />}

                <input type="text" 
                placeholder="Email Address" 
                ref={email}
                className="p-4 m-2 text-white border border-gray-400 w-full rounded-lg" />
                
                <input type="password" 
                placeholder="Password" 
                ref={password}
                className="p-4 m-2 text-white border border-gray-400 w-full rounded-lg" />

                <p className="text-red-500 font-bold m-2">{errorMsg}</p>

                <button onClick={handleBtnClick}
                className="p-4 m-2 text-white font-bold bg-red-500 w-full rounded-lg cursor-pointer">{isSignIn ? "Sign In" : "Sign Up"}</button>

                <p className="text-white mt-4 ml-2 cursor-pointer" onClick={toggleSignUp}>{isSignIn ? "New to Netflix? Sign In" : "Already Registred, Sign up now..."}.</p>
            </form>
        </div>
        </>
    )
}
export default Login