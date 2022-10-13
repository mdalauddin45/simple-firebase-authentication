// import logo from "./logo.svg";
import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;
