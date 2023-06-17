import React from "react";
// import GoogleButton from 'react-google-button'
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { TwitterLoginButton } from "react-social-login-buttons";
import "./SignIn.css";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import Button from "@mui/material/Button";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  function signInAsGuest() {
    // ゲストとしてログインする処理を実装する
    auth
      .signInAnonymously()
      .then((userCredential) => {
        // ゲストログイン成功時の処理
        const user = userCredential.user;
        console.log("ゲストログイン成功:", user);
      })
      .catch((error) => {
        // ゲストログイン失敗時の処理
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("ゲストログイン失敗:", errorCode, errorMessage);
      });
  }
  return (
    <div className="signin-container">
      <div className="sign-in-form">
        <div className="left-box">
          <form>
            <span className="loginWithName">
              <h2>ログイン</h2>
            </span>
            <input type="email" name="email" placeholder="email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input
              type="submit"
              name="login-button"
              id="loginButton"
              value={"login"}
            />
          </form>
          <Button
            variant="contained"
            style={{ backgroundColor: "gray" }}
            disableElevation
            onClick={signInAsGuest}
          >
            ゲストモードでログイン
          </Button>
        </div>
        <div className="right-box">
          <span className="loginWithSns">
            <h3>SNSでログイン</h3>
          </span>
          {/* <GoogleButton
            onClick={() => { console.log('Google button clicked') }}
            /> */}
          <form>
            <FacebookLoginButton
              onClick={() => alert("Sorry, not implemented yet. ")}
            />
            <GoogleLoginButton onClick={signInWithGoogle} />
            <TwitterLoginButton
              onClick={() => alert("Sorry, not implemented yet.")}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
