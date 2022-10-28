import React, { useState, useEffect } from "react";
import { Provider } from "../../context/authContext";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

const AuthProvider = () => {
  const [isAuth, setIsAuth] = useState("false");

  useEffect(() => {
    const removeListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });

    return removeListener;
  }, []);

  async function handleSignUp(account, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleLogin(account, password) {
    try {
      await signInWithEmailAndPassword(auth, account, password);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  }

  const value = { isAuth, handleLogin, handleLogout, handleSignUp };

  return <Provider value={value}>{children}</Provider>;
};

export default AuthProvider;
