import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);

  const { name, image, job, text } = people[index];

  const nextPerson = () => {
    setIndex((curr) => {
      const newIndex = (curr + 1) % people.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((curr) => {
      const newIndex = (curr - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      return (randomNumber = index + 1);
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div>
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <br />
        <button className="btn btn-hipster" onClick={randomPerson}>surprise me</button>
      </article>
    </main>
  );
};

export default App;
