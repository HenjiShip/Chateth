import React from "react";
import "./chats.scss";

// nested in Sidebar
const Chats = () => {
  return (
    <div className="chats">
      <div className="user-chat">
        <img src="https://www.svg.com/img/gallery/the-untold-truth-of-persona-5s-joker/l-intro-1666638091.jpg" />
        <div className="user-chat-info">
          <span>Joker</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
