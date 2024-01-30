import React from 'react';
import { FaHeadSideVirus } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import "../Home.css"
const cardsData = [
  {
    id: 'firstcard',
    icon: <FaHeadSideVirus />,
    text: 'Hard to feel calm or sleep because of stress',
    buttonText: 'Book trial @ 99',
  },
  {
    id: 'secondcard',
    icon: <FaHeartPulse />,
    text: 'If you have Palpitations and Breathing Trouble',
    buttonText: 'I want to Buy',
  },
  {
    id: 'thirdcard',
    icon: <FaRunning />,
    text: 'You have been advised by doctors to avoid physical activity',
    spanText: 'I have a Question',
  },
];

const CardList = () => {
  return (
    <div className='belowdiv'>
      {cardsData.map((card) => (
        <div className='card' id={card.id} key={card.id}>
          <div className='image'>{card.icon}</div>
          <div className='text'>{card.text}</div>
          {card.buttonText ? (
            <button className='btn'>{card.buttonText}</button>
          ) : (
            <span className='question'>{card.spanText}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardList;
