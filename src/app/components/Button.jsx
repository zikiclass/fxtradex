"use client";
import Link from "next/link";
import styled from "styled-components";

const Button = ({ href, title }) => {
  return (
    <>
      <Button_>
        <Link href={`/${href}`}>{title}</Link>
      </Button_>
    </>
  );
};
export default Button;

const Button_ = styled.button`
  background-color: var(--primary-color);
  padding: 7px 2rem;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  margin-top: 0.4rem;
  color: #fff;

  &:hover {
    background-color: var(--secondary-color);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
  }
`;
