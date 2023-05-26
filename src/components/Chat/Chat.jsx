import React, { useContext } from "react";
import { BsFillCameraVideoFill, HiUserAdd, TfiMoreAlt } from "react-icons/all";
import "./chat.scss";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";
import { ChatContext } from "../../context/ChatContext";
// nested in Home
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chat-info">
        <span>{data.user.displayName}</span>
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
