"use client";
import styled from "styled-components";

const BannerEmpty = ({ text, smallText }) => {
  return (
    <>
      <Div>
        <H1>{text}</H1>
        <Span>{smallText}</Span>
      </Div>
    </>
  );
};

export default BannerEmpty;

const Div = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #151238;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0;
`;

const H1 = styled.h1`
  font-size: bold;
  font-size: 3rem;
  color: white;
  text-align: center;
  margin: 0;
`;

const Span = styled.span`
  color: white;
  margin-top: -10px;
  font-weight: bold;
`;
