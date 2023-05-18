import React, { useState } from "react";
import "./search.scss";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

// nested in Sidebar
const Search = () => {
  const [username, setUsername] = useState(null);
  const [user, setUser] = useState(false);
  const [err, setErr] = useState(false);
  const usersRef = collection(db, "users");

  const handleSelect = () => {
    // check if group exists(chats in firestore) exists, and if not then create new one.
  };

  const handleSearch = async () => {
    const q = query(usersRef, where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length === 0) {
        setUser(false);
      } else {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      }
    } catch (error) {
      setErr(true);
    }
    console.log(user);
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {user && (
        <div className="user-chat" onClick={handleSelect}>
          <img src={user.photoURL} />
          <div className="user-chat-info">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
