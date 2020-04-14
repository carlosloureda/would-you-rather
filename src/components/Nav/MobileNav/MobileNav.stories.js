import React from "react";
import StoryRouter from "storybook-react-router";

import MobileNav from "./MobileNav";
import { users } from "../../../api/api";

export default {
  title: "MobileNav",
  component: MobileNav,
  decorators: [StoryRouter()],
};

export const Default = () => <MobileNav user={users["alicethomas"]} />;
