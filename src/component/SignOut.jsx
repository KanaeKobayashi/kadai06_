import React from "react";
import { auth } from "../firebase.js";
import { Button } from "@mui/material";
import "./SignOut.css";

const SignOut = () => {
  return (
    <div
      className="signOutWrapper"
      style={{
        backgroundColor: "#222a41",
        display: "flex",
        color: "white",
        height: "40px",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button
        onClick={() => auth.signOut()}
        style={{ color: "white", fontSize: "14px" }}
      >
        Sign Out
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
    </div>
  );
};

export default SignOut;
