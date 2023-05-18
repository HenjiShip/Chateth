import React from "react";
import Message from "./Message/Message";
import "./messages.scss";

// nested in Chat
const Messages = () => {
  return (
    <div className="messages">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
