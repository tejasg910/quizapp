"use client";

import React, { useState } from "react";
import { saveOption } from "../saveAnswers";

const QuestionOptions = ({ questionId, userId }) => {
  const [selected, setSelected] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });
  const handleClick = (id) => {
    switch (id) {
      case 0: {
        setSelected({
          option1: true,
          option2: false,
          option3: false,
          option4: false,
        });
        break;
      }
      case 1: {
        setSelected({
          option1: false,
          option2: true,
          option3: false,
          option4: false,
        });
        break;
      }
      case 2: {
        setSelected({
          option1: false,
          option2: false,
          option3: true,
          option4: false,
        });
        break;
      }
      case 3: {
        setSelected({
          option1: false,
          option2: false,
          option3: false,
          option4: true,
        });
        break;
      }
    }

    saveOption(questionId, id, "530sljfsldjfd");
  };
  return (
    <div className="options">
      <ul
        onClick={() => {
          handleClick(0);
        }}
        id={0}
        className={`option ${selected.option1 ? "bg-green-500" : null}`}
      >
        <li>option 1</li>
      </ul>
      <ul
        onClick={() => {
          handleClick(1);
        }}
        id={1}
        className={`option ${selected.option2 ? "bg-green-500" : null}`}
      >
        <li>option 2</li>
      </ul>
      <ul
        onClick={() => {
          handleClick(2);
        }}
        id={2}
        className={`option ${selected.option3 ? "bg-green-500" : null}`}
      >
        <li>option 3</li>
      </ul>
      <ul
        onClick={() => {
          handleClick(3);
        }}
        id={3}
        className={`option ${selected.option4 ? "bg-green-500" : null}`}
      >
        <li>option 4</li>
      </ul>
    </div>
  );
};

export default QuestionOptions;
