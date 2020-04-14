import React from "react";
import StoryRouter from "storybook-react-router";

import Nav from "./Nav";

export default {
  title: "Nav",
  component: Nav,
  decorators: [StoryRouter()],
};

export const Default = () => <Nav />;
