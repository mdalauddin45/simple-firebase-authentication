import React, { useState } from "react";
import app from "./firebase/firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const [uers, setUsers] = useState({});
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

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
  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const user = result.user;
        setUsers(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      {user.email ? (
        <button onClick={handleGooleSignOut}>Sign Out</button>
      ) : (
        <div>
          <button onClick={handleGooleSignIn}>Google</button>
          <button onClick={handleGithubSignIn}>Githun</button>
        </div>
      )}
      {uers.uid && (
        <div>
          <h3> User Name: {uers.displayName}</h3>
          <p>Email:{uers.email} </p>
          <img src={uers.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
