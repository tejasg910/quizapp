"use client";

export const saveOption = (questionId, optionIndex, userId) => {
  console.log("save optoin called", questionId);
  //check session storage
  let answers = sessionStorage.getItem(userId);
  answers = JSON.parse(answers);
  if (answers) {
    let updatedAnswer = answers.filter((question, index) => {
      console.log(question.questionId, questionId);
      return question.questionId !== questionId;
    });

    updatedAnswer.push({ questionId, answer: optionIndex });

    sessionStorage.setItem(userId, JSON.stringify(updatedAnswer));
  } else {
    let answer = [{ questionId, answer: optionIndex }];

    sessionStorage.setItem(userId, JSON.stringify(answer));
  }
};
