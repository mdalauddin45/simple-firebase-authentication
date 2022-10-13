import React, { useState } from "react";
import app from "./firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGooleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGooleSignOut = () => {
    signOut(auth, provider)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };
  return (
    <div>
      {user.email ? (
        <button onClick={handleGooleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGooleSignIn}>Google</button>
      )}
      {user.email && (
        <div>
          <h3> User Name: {user.displayName}</h3>
          <p>Email:{user.email} </p>
        </div>
      )}
    </div>
  );
}

export default App;
