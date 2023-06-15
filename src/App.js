import React from 'react';
import './App.css';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase.js";
import Home from './component/Home';
import SignIn from './component/SignIn';




function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="appWrapper">
      {user ? <Home /> : <SignIn />}
    </div>
  );
}

export default App;