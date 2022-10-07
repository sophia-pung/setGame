import React from "react";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import "./Card.css";
import CardListGenerator from "./cardListGenerator.js";

const Card = (props) => {
  const card = props.card;
  const image = props.image;

  const className = "Card" + (card.selected ? " Clicked" : ""); // true then false

  return (
    <div className={className}>
      <img src={image} />;
      <h2>{card.name}</h2>
    </div>
  );
};

export default Card;
