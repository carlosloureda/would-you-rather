import React from "react";
import AnswerQuestion from "./AnswerQuestion";
import QuestionDetail from "./QuestionDetail";

const Question = () => {
  return (
    <div>
      <h1>Hi from Question page!</h1>
      <AnswerQuestion />
      <QuestionDetail />
    </div>
  );
};

export default Question;
