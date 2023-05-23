import React from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." name="" id="" />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <img src={Img} alt="" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
