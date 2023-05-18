import React from "react";
import { MdFileUpload } from "react-icons/all";
import "./input.scss";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="message" />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <div className="input-icon">
            <MdFileUpload />
          </div>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
