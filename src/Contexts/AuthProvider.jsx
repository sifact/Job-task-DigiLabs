import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    // sign up with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // update profile
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };
    // load user info from firebase:
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user observing");
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const { data: updateInfo = "", refetch } = useQuery({
        queryKey: ["updateInfo"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/update`);
            const data = await res.json();
            return data;
        },
    });

    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        updateUser,
        loading,
        updateInfo,
        refetch,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
