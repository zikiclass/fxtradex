import React from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Groups2Icon from "@mui/icons-material/Groups2";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./admin.css";
const Cards = () => {
  const cardLists = [
    {
      id: 1,
      title: "Users",
      amount: "89",
      icon: <Groups2Icon style={{ fontSize: "3rem" }} />,
      color: "#feab2c",
    },
    {
      id: 2,
      title: "Deposits",
      amount: "$67,123",
      icon: (
        <CurrencyBitcoinIcon
          style={{
            fontSize: "3rem",
            backgroundColor: "#fff",
            color: "#ac4bbb",
            borderRadius: "50px",
          }}
        />
      ),
      color: "#ac4bbb",
    },
    {
      id: 3,
      title: "Withdrawals",
      amount: "$90,567",
      icon: (
        <AttachMoneyIcon
          style={{
            fontSize: "3rem",
            backgroundColor: "#fff",
            color: "#3693ff",
            borderRadius: "50px",
          }}
        />
      ),
      color: "#3693ff",
    },
    {
      id: 4,
      title: "Profits",
      amount: "$89,900",
      icon: (
        <CurrencyBitcoinIcon
          style={{
            fontSize: "3rem",
            backgroundColor: "#fff",
            color: "#ac4bbb",
            borderRadius: "50px",
          }}
        />
      ),
      color: "#ac4bbb",
    },
  ];
  return (
    <div className="cards">
      {cardLists.map((card) => (
        <div
          className="card"
          key={card.id}
          style={{ backgroundColor: `${card.color}` }}
        >
          <div className="title">
            <ArrowDropDownIcon /> <span>{card.title}</span>
          </div>
          <div className="details">
            <span>{card.amount}</span>
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards;
