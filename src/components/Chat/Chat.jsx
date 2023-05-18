import React from "react";
import { BsFillCameraVideoFill, HiUserAdd, TfiMoreAlt } from "react-icons/all";
import "./chat.scss";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";
// nested in Home
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Joker</span>
        <div className="chat-icons">
          <div className="icons">
            <BsFillCameraVideoFill />
          </div>
          <div className="icons">
            <HiUserAdd />
          </div>
          <div className="icons">
            <TfiMoreAlt />
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
