import React, { useState, useEffect } from 'react';
import './CardGame.css';

const CardGame = ({ cardData }) => {
  const [cards, setCards] = useState(cardData);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const handleClick = (id) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, clicked: true } : card
    );

    setCards(updatedCards);

    const clickedCard = cards.find((card) => card.id === id);

    if (clickedCard.clicked) {
     
      setScore(0);

      if (score > topScore) {
        setTopScore(score);
      }
    } else {
     
      setScore(score + 1);
    }

    shuffleCards();
  };

  useEffect(() => {
    shuffleCards();
  }, []); 
  return (
    <div className="card-game">
      <div className="navbar">
        <div className="brand">Memory Card Game</div>
        <div className="scores">
          <div className="score">Score: {score}</div>
          <div className="top-score">Top Score: {topScore}</div>
        </div>
      </div>
      <div className="card-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.clicked ? 'clicked' : ''}`}
            onClick={() => handleClick(card.id)}
          >
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGame;