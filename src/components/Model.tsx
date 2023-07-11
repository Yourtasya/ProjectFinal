import React from "react";
import "../styles/Model.css";
//@ts-ignore
const Model = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "model active" : "active"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "model__content active" : "model__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Model;
