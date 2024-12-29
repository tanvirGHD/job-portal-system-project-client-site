
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)

    //Register/SignUp
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //SignIn/Login
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signin with Google
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //signOut/LogOut
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    //observer --> user k dore rakbe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            console.log('State captured', currentUser?.email)

            if(currentUser?.email){
                const user = {email: currentUser.email};

            axios.post('http://localhost:3000/jwt', user, {withCredentials: true})
            .then(res => {
                console.log('Login token',res.data)
                setLoading(false)
            })

            }
            else{
                axios.post('http://localhost:3000/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('Logout',res.data)
                    setLoading(false)
                })
            }

        })

        return ()=>{
            unsubscribe();
        }
    },[])



    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

