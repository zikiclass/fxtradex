"use client";
import Link from "next/link";
import styled from "styled-components";

const Button = ({ title, onClick }) => {
  return (
    <>
      <Button_ onClick={onClick}>
        <span>{title}</span>
      </Button_>
    </>
  );
};
export default Button;

const Button_ = styled.button`
  background-color: var(--primary-color);
  padding: 3px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  margin-top: 0.2rem;
  color: #fff;
  width: 100%;
  font-size: 14px;

  &:hover {
    background-color: var(--secondary-color);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
  }
`;
