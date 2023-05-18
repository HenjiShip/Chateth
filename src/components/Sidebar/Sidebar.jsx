import React from "react";
import Search from "./Search/Search";
import Navbar from "./Navbar/Navbar";
import Chats from "./Chats/Chats";
import "./sidebar.scss";

// nested in Home
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
