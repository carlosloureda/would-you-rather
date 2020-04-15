import React from "react";
import StoryRouter from "storybook-react-router";

import NewQuestion from "./NewQuestion";

export default {
  title: "NewQuestion",
  component: NewQuestion,
  decorators: [StoryRouter()],
};

export const Default = () => <NewQuestion />;
