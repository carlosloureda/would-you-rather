import React from "react";
import { Typography, Row, Col, Progress } from "antd";

import QuestionWrapper from "../QuestionWrapper";
import "./QuestionDetail.scss";

const QuestionDetailItem = ({ option, totalVotesCount, currentUserId }) => {
  const optionVotes = option.votes.length;
  const percentage = Math.round((100 * optionVotes) / totalVotesCount);
  const isSelected = option.votes.includes(currentUserId);
  return (
    <div className={`results-container ${isSelected ? "selected" : ""}`}>
      <div className={isSelected ? "results__badge" : "no-show"}>Your Vote</div>
      <Typography.Text className="option-text">{option.text}</Typography.Text>
      <Progress
        percent={percentage}
        strokeWidth="15px"
        status="normal"
        strokeColor={{
          from: "#efdbff",
          to: "#8F6E88",
        }}
        className="progress-bar"
      />
      <Typography.Paragraph className="result-statistics">
        {optionVotes} out of {totalVotesCount}
      </Typography.Paragraph>
    </div>
  );
};
const QuestionDetail = ({ authorName, avatarURL, question, currentUserId }) => {
  const optionOne = question.optionOne;
  const optionTwo = question.optionTwo;
  const totalVotesCount = optionOne.votes.length + optionTwo.votes.length;

  return (
    <QuestionWrapper title={`${authorName} asked`} avatarURL={avatarURL}>
      <QuestionDetailItem
        option={optionOne}
        totalVotesCount={totalVotesCount}
        currentUserId={currentUserId}
      />
      <QuestionDetailItem
        option={optionTwo}
        totalVotesCount={totalVotesCount}
        currentUserId={currentUserId}
      />
    </QuestionWrapper>
  );
};

export default QuestionDetail;
