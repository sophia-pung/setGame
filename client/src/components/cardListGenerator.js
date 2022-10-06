import React from "react";
import { useEffect, useState } from "react";
import { useReducer } from "react";

//eventually set cardArray using a for loop going through the imports

const CardListGenerator = () => {
  const cardColors = ["r", "p", "g"]; //red purple green
  const cardShapes = ["d", "o", "s"]; //diamond oval squiggle
  const cardFills = ["o", "so", "st"]; // open, solid stripped

  let cardList = [];

  for (const color of cardColors) {
    for (const shape of cardShapes) {
      for (const fill of cardFills) {
        let card = {
          id: cardList.length,
          color: color,
          shape: shape,
          fill: fill,
          name: color + shape + fill,
          image: "./setItems/" + color + shape + fill + ".png", //require is the same idea as import (?)
        };
        cardList.push(card);
      }
    }
  }
  console.log("cardList", cardList);
  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray(cardList) {
    for (var i = cardList.length - 1; i > 0; i--) {
      //i is a #, 1-26, going down
      var j = Math.floor(Math.random() * (i + 1)); //calculates a random value for j 1-27
      var temp = cardList[i]; //these three lines swap three cards
      cardList[i] = cardList[j];
      cardList[j] = temp;
    }
  }
  console.log("cardList", cardList);
  console.log("cardList", cardList[0].image);
  //const randomCard = "test"
  const randomCard = cardList[Math.floor(Math.random() * cardList.length)];
  console.log("TEST", cardList[0]);
  return <img src={randomCard.image} />;
};

export default CardListGenerator;
