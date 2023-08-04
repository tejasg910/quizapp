import QuizCategoryCard from "@/app/components /quiz/cards/QuizCategoryCard";

import React from "react";
import Timer from "./Timer";

const page = async ({ params }) => {
  const category = decodeURIComponent(params.category.toUpperCase());

  //get quizzes by category

  try {
    const res = await fetch(
      `${process.env.HOST}/api/quiz/getquizbycategory/${category}`,
      { cache: "no-cache" }
    );

    // const quizzess = await res.json();
  } catch (error) {
    console.log(error);
  }
  const quizzess = {
    data: [
      {
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
          },
        ],
        timeLimit: 20,
        category: "CURRENT AFAIRS",
      },
    ],
  };
  console.log(quizzess);
  return (
    <div>
      <h4 className="text-2xl text-center">{category}</h4>
      <hr />
      <div className="flex flex-wrap">
        {quizzess.data.map((quiz, index) => (
          <>
            <Timer />
            <QuizCategoryCard
              key={quiz.id}
              title={quiz.title}
              category={category}
              id={quiz.id}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default page;
