import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";

import AnswerQuestion from "./AnswerQuestion";
import QuestionDetail from "./QuestionDetail";
import { users, questions } from "../../api/api";

const Question = ({ questionId }) => {
  const { id } = useParams();
  questionId = id ? id : questionId;

  // { authorName, avatarURL, question,currentUserId}

  const question = questions[questionId];
  const authorName = users[question.author].name;
  const avatarURL = users[question.author].avatarURL;
  const currentUserId = "alicethomas";

  return (
    <Row justify="center" style={{ margin: "25px 0" }}>
      <Col sm={20} md={16}>
        <AnswerQuestion
          question={question}
          authorName={authorName}
          avatarURL={avatarURL}
          currentUserId={currentUserId}
        />
        <QuestionDetail
          question={question}
          authorName={authorName}
          avatarURL={avatarURL}
          currentUserId={currentUserId}
        />
      </Col>
    </Row>
  );
};

export default Question;
