"use client";
import "./index/styles/buttons.css";

const ButtonTransparent = ({ title, onClick }) => {
  return (
    <>
      <div className="btnTransparent" onClick={onClick}>
        <span>{title}</span>
      </div>
    </>
  );
};
export default ButtonTransparent;
