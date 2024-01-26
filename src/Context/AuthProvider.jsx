import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setLoading(false);
      return userCredential.user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const loginwithGoogle = async () => {
    try {
      setLoading(true);
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user);
      setLoading(false);
      return userCredential.user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setLoading(false);
      return userCredential.user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginwithGoogle,
    loading,
    login,
    logOut,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
