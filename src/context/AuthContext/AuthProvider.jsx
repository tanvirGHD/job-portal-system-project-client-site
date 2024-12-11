
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';

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

    //signOut/LogOut
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }


    //observer --> user k dore rakbe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            console.log('State captured', currentUser)
            setLoading(false)
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
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

