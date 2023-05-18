import React from "react";
import "./message.scss";

// nested in Messages
const Message = () => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img
          src="https://www.svg.com/img/gallery/the-untold-truth-of-persona-5s-joker/l-intro-1666638091.jpg"
          alt=""
        />
        <span>just now</span>
      </div>

      <div className="message-content">
        <p>hello</p>
        <img
          src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
