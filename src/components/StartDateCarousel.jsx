import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import "../batchandslot.css";

const StartDateCarousel = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    const formattedDate = format(date, 'dd MMM');
    
    // Select the clicked date and unselect the previous one
    setSelectedDate(formattedDate);
    alert("Your Start Date is selected");
  };

  const dateCards = [];

  for (let i = 0; i < 14; i++) {
    const date = addDays(currentDate, i);
    const formattedDate = format(date, 'dd MMM');
    const weekdayAbbreviation = format(date, 'EEE');

    dateCards.push(
      <div
        key={i}
        className={`date-card ${selectedDate === formattedDate ? 'selected' : ''}`}
        onClick={() => handleDateClick(date)}
      >
        <div className='date'>{formattedDate}</div>
        <div className='weekday'>{weekdayAbbreviation}</div>
      </div>
    );
  }

  return (
    <div className='startdatecarouselcomponent'>
      <div className='date-cards-container'>{dateCards}</div>
    </div>
  );
};

export default StartDateCarousel;
