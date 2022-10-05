import React from "react";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import rdo from "./setItems/rdo.png";
import rdso from "./setItems/rdso.png";
import rdst from "./setItems/rdst.png";
import roo from "./setItems/roo.png";
import roso from "./setItems/roso.png";
import rost from "./setItems/rost.png";
import rso from "./setItems/rso.png";
import rsso from "./setItems/rsso.png";
import rsst from "./setItems/rsst.png";
import pdo from "./setItems/pdo.png";
import pdso from "./setItems/pdso.png";
import pdst from "./setItems/pdst.png";
import poo from "./setItems/poo.png";
import poso from "./setItems/poso.png";
import post from "./setItems/post.png";
import pso from "./setItems/pso.png";
import psso from "./setItems/psso.png";
import psst from "./setItems/psst.png";
import gdo from "./setItems/gdo.png";
import gdso from "./setItems/gdso.png";
import gdst from "./setItems/gdst.png";
import goo from "./setItems/goo.png";
import goso from "./setItems/goso.png";
import gost from "./setItems/gost.png";
import gso from "./setItems/gso.png";
import gsso from "./setItems/gsso.png";
import gsst from "./setItems/gsst.png";


//eventually set cardArray using a for loop going through the imports

const CardGenerator = () => {
    const cardColors = ["r", "p", "g"] //red purple green
    const cardShapes = ["d", "o", "s"] //diamond oval squiggle
    const cardFills = ["o", "so", "st"] // open, solid stripped
    
    let cardList = []
    
    for (const color of cardColors) {
    for (const shape of cardShapes) {
    for (const fill of cardFills) {
      let card = {
        id: cardList.length,
        color: color,
        shape: shape,
        fill: fill,
        name: color + shape + fill,
        image: "./setItems/" + color + shape + fill + ".png"
      }
      cardList.push(card)
    };
    };
    };
  console.log("cardList", cardList);
  console.log("cardList", cardList[0].image)
  //const randomCard = "test"
  const randomCard = cardList[Math.floor(Math.random() * cardList.length)];
  console.log("TEST", cardList[0]);
  return <img src={randomCard.image}/>;
};

export default CardGenerator;
