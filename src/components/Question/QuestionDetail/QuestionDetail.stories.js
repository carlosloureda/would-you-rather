import React from "react";
import StoryRouter from "storybook-react-router";

import QuestionDetail from "./QuestionDetail";
import { users, questions } from "../../../api/api";

export default {
  title: "QuestionDetail",
  component: QuestionDetail,
  decorators: [StoryRouter()],
};

const user = users["alicethomas"];
const question = questions["8xf0y6ziyjabvozdd253nd"];

export const Default = () => (
  <QuestionDetail
    authorName={user.name}
    avatarURL={user.avatarURL}
    question={question}
    currentUserId={"alicethomas"}
  />
);
