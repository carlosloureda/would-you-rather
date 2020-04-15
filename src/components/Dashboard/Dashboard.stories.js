import React from "react";
import StoryRouter from "storybook-react-router";

import Dashboard from "./Dashboard";
import { users, questions } from "../../api/api";

export default {
  title: "Dashboard",
  component: Dashboard,
  decorators: [StoryRouter()],
};

let _questions = Object.values(questions);
export const Default = () => (
  <Dashboard answeredQuestions={_questions} unAnsweredQuestions={_questions} />
);

export const NoAnsweredQuestions = () => (
  <Dashboard answeredQuestions={[]} unAnsweredQuestions={_questions} />
);

export const NoUnansweredQuestions = () => (
  <Dashboard answeredQuestions={_questions} unAnsweredQuestions={[]} />
);

export const NoQuestions = () => (
  <Dashboard answeredQuestions={[]} unAnsweredQuestions={[]} />
);
