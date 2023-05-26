import React, { useContext } from "react";
import "./message.scss";
import { AuthContext } from "../../../../context/AuthContext";
import { ChatContext } from "../../../../context/ChatContext";

// nested in Messages
const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  console.log(message);

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
        <p>{message.text}</p>
        {message?.img && <img src={message?.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
