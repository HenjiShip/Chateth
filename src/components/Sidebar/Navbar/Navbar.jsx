import React, { useContext } from "react";
import "./navbar.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { AuthContext } from "../../../context/AuthContext";

// nested in Sidebar
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Chateth</span>
      <div className="user">
        <img
          src={currentUser.photoURL}
          alt="Profile Image"
        />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
