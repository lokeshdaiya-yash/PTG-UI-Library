import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const userAuthContext = createContext();

//For Authentication from firebase
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  //Use inbuilt firebase "signInWithEmailAndPassword" method for login
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //for logout
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);

      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
