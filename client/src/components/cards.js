import React from "react";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import "./cards.css";
import Card from "./Card.js";

const scoreThreeCards = (a, b, c) => {
    let score = 0; 
    score += (a.color === b.color) && (b.color === c.color) ? 1 : 0;  
    return score; 
};


const Cards = () => {
    const cardColors = ["r", "p", "g"] //red purple green
    const cardShapes = ["d", "o", "s"] //diamond oval squiggle
    const cardFills = ["o", "so", "st"] // open, solid stripped
    
    let initialCards = []
    
    for (const color of cardColors) {
    for (const shape of cardShapes) {
    for (const fill of cardFills) {
      let card = {
        id: initialCards.length,
        selected: false,
        color: color,
        shape: shape,
        fill: fill,
        name: color + shape + fill,
        image: "./setItems/" + color + shape + fill + ".png"
      }
      initialCards.push(card)
    };
    };
    };
// const Cards = () => {
//   const initialCards = [];

//   for (let i = 0; i < 9; i++) {
//     initialCards.push({
//       id: i,
//       cardName: `card ${i + 1}`,
//       selected: false,
//       color: "red",
//     });
//   }

  console.log("IC", initialCards);

  //react makes a copy of the things passed to it, we didn't actually change it
  const [cards, setCards] = useState(initialCards);
  const [score, setScore] = useState(0);
  const handleCardClick = (card) => {
    const newCards = cards.map((c) => {
      if (c.id == card.id) {
        c.selected = !c.selected;
      }
      return c;
    });
    console.log("newCards", newCards); //c is a reference to an element in the cards array
    const selectedCards = newCards.filter((c) => c.selected);
    if (selectedCards.length === 3){
        const point = scoreThreeCards(selectedCards[0], selectedCards[1], selectedCards[2]);
        setScore(score + point);
        newCards.forEach((c) => c.selected = false);
    } 
    setCards(newCards);
  };

  //if selected cards < 2; return
  //map 

  return (
    <div>
        <h2>score: {score}</h2>
      <div className="gameCards">
        {cards.map((element, index) => {
          return (
            <Card
              onCardClick={handleCardClick}
              key={"card-" + index}
              card={element}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
