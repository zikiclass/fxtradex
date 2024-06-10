"use client";
import "./index/styles/buttons.css";

const Button2 = ({ title, onClick }) => {
  return (
    <>
      <div className="button_2" onClick={onClick}>
        <span>{title}</span>
      </div>
    </>
  );
};
export default Button2;
