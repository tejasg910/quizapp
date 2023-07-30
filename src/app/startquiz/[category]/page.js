import QuizCategoryCard from "@/app/components /quiz/cards/QuizCategoryCard";

import React from "react";

const page = async ({ params }) => {
  const category = decodeURIComponent(params.category.toUpperCase());

  //get quizzes by category

  const res = await fetch(
    `${process.env.HOST}/api/quiz/getquizbycategory/${category}`,
    { cache: "no-cache" }
  );
  const quizzess = await res.json();
  console.log(quizzess);
  return (
    <div>
      <h4 className="text-2xl text-center">{category}</h4>
      <hr />
      <div className="flex flex-wrap">
        {quizzess.data.map((quiz, index) => (
          <QuizCategoryCard title={quiz.title} />
        ))}
      </div>
    </div>
  );
};

export default page;
