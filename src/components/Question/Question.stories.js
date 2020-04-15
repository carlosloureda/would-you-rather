import React from "react";
import StoryRouter from "storybook-react-router";

import Question from "./Question";
import { questions } from "../../api/api";

export default {
  title: "Question",
  component: Question,
  decorators: [StoryRouter()],
};

// const user = users["alicethomas"];
const question = questions["8xf0y6ziyjabvozdd253nd"];

export const Default = () => <Question questionId={question.id} />;
