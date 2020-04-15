import React from "react";
import { Form, Radio, Typography, Button } from "antd";

import QuestionWrapper from "../QuestionWrapper";
import "./AnswerQuestion.scss";

const AnswerQuestion = ({ authorName, avatarURL, question }) => {
  const [answer, setAnswer] = React.useState(null);

  const optionOneText = question.optionOne.text;
  const optionTwoText = question.optionTwo.text;

  const onAnswerSelected = ({ target: { value: answer } }) => setAnswer(answer);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("selected answer is: ", answer);
    // TODO: Add Redux;
    setAnswer("");
  };

  return (
    <QuestionWrapper title={`${authorName} asks`} avatarURL={avatarURL}>
      <Form>
        <Typography.Title level={3}>Would You Rather ...</Typography.Title>
        <Radio.Group onChange={onAnswerSelected}>
          <Radio value={"optionOne"} className="answer-question__radio-btn">
            {optionOneText}
          </Radio>
          <Radio value={"optionTwo"} className="answer-question__radio-btn">
            {optionTwoText}
          </Radio>
        </Radio.Group>
        <Button
          type="primary"
          block
          disabled={!answer}
          onClick={onSubmit}
          className="answer-question__submit"
        >
          Submit
        </Button>
      </Form>
    </QuestionWrapper>
  );
};

export default AnswerQuestion;
