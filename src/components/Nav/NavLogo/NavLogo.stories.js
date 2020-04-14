import React from "react";
import NavLogo from "./NavLogo";

import StoryRouter from "storybook-react-router";

export default {
  title: "NavLogo",
  component: NavLogo,
  decorators: [StoryRouter()],
};

export const Default = () => <NavLogo />;
