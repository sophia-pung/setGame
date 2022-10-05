import React from "react";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import "./Card.css";
import CardGenerator from "./cardImages.js";

const Card = (props) => {
  const card = props.card;

//every time the state changes, map will re-do
const handleClick = (event) => {
    props.onCardClick(card)
};

const className = "Card" + (card.selected ? " Clicked" : ""); // true then false 

  return (
    <div className={className} onClick={handleClick}>
      <h2>{card.cardName}</h2>
    </div>
  );
};

export default Card;
