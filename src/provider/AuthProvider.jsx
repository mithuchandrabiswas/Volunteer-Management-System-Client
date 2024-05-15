import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config"
import axios from "axios";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update User Profile 
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    // Sign In User
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign Out User
    const logOutUser = async () => {
        setLoading(true);
        const { data } = await axios(`${import.meta.env.VITE_LOCAL_API_URL}/logout`, { withCredentials: true })
        console.log(data);
        return signOut(auth);
    }

    // On Auth State Changed
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('changes', currentUser);
            setUser(currentUser);
            setLoading(false);
            console.log(`current user: ${currentUser.displayName}`);
        });
        return () => {
            unSubcribe();
        }
    }, [])

    // Google Log in
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Github Log in
    const githubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const authInfo = { user, setUser, loading, setLoading, createUser, updateUserProfile, signInUser, logOutUser, googleLogIn, githubLogIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;