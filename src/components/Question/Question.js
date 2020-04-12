import React from "react";
import { useParams } from "react-router-dom";

import AnswerQuestion from "./AnswerQuestion";
import QuestionDetail from "./QuestionDetail";

const Question = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Hi from Question page!</h1>
      {id && <span>The question id is : {id}</span>}
      <AnswerQuestion />
      <QuestionDetail />
    </div>
  );
};

export default Question;
