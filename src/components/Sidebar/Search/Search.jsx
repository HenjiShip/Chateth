import React, { useContext, useState } from "react";
import "./search.scss";
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../../context/AuthContext";

// nested in Sidebar
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const usersRef = collection(db, "users");

  const { currentUser } = useContext(AuthContext);

  const handleSelect = async () => {
    // check if group exists(chats in firestore) exists, and if not then create new one.
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        // exists is a firebase method
        // create a doc between user and target user uid if chat does not exist
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
      }
      // we're updating user's chats in the sidebar when they click on someone they've searched
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
      // updating target's userChats as well so they can see the message
      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedId + ".userInfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    } catch (error) {
      console.log({ error });
    }
    setUser(null);
    setUsername("")
    //create user chats
  };

  const handleSearch = async () => {
    const q = query(usersRef, where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length === 0) {
        setUser(null);
      } else {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      }
    } catch (error) {
      console.log({ error });
      setErr(true);
    }
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
          value={username}
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
