import React from "react";

const Modal = (props) => {
  return (
    <div>
      <h1>{props.content}</h1>
      <button onClick={() => props.set(false)}>OK</button>
    </div>
  );
};

export default Modal;
