import QuestionOptions from "@/app/components /client/options/questionOptions";
import { Timer } from "@mui/icons-material";

import React from "react";

const page = () => {
  //get the quiz by id

  const quiz = {
    id: 1,
    title: "ENGLISH QUIZ",
    questions: [
      {
        question: "What is your name?",
        options: [
          { option: "tejas" },
          { option: "virat" },
          { option: "tushar" },
          { option: "vittal" },
        ],
        correctOption: 1,
        id: 1,
      },
    ],
    timeLimit: 20,
    category: "CURRENT AFAIRS",
  };
  return (
    <div className="container m-auto">
      <h5 className="text-center mt-4">{quiz.title}</h5>
      <div className="quizcontainer">
        <div className="questions ">
          <div className="single__question">
            <h5>What is your name? </h5>

            <QuestionOptions questionId={quiz.questions[0].id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
