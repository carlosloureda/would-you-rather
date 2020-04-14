import React from "react";
import Login from "./Login";

import StoryRouter from "storybook-react-router";

export default {
  title: "Login",
  component: Login,
  decorators: [StoryRouter()],
};

export const Default = () => <Login />;
