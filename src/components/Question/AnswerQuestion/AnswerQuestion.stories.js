import React from "react";
import StoryRouter from "storybook-react-router";

import AnswerQuestion from "./AnswerQuestion";
import { users, questions } from "../../../api/api";

export default {
  title: "AnswerQuestion",
  component: AnswerQuestion,
  decorators: [StoryRouter()],
};

const user = users["alicethomas"];
const question = questions["8xf0y6ziyjabvozdd253nd"];

export const Default = () => (
  <AnswerQuestion
    authorName={user.name}
    avatarURL={user.avatarURL}
    question={question}
  />
);
