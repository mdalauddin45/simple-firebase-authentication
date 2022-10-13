import React from "react";
import app from "./firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();

  const handleGooleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <button onClick={handleGooleSingIn}>Google</button>
    </div>
  );
}

export default App;
