import React from "react";
import MainNav from "./MainNav";

import StoryRouter from "storybook-react-router";

export default {
  title: "MainNav",
  component: MainNav,
  decorators: [StoryRouter()],
};

export const Default = () => <MainNav />;
export const Desktop = () => <MainNav mode="horizontal" />;
export const Mobile = () => <MainNav mode="vertical" />;
