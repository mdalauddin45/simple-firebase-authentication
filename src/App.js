// import logo from "./logo.svg";
import "./App.css";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    console.log("hi");
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSingIn}>Google</button>
    </div>
  );
}

export default App;
