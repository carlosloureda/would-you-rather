import React from "react";
import StoryRouter from "storybook-react-router";

import DesktopNav from "./DesktopNav";
import { users } from "../../../api/api";

export default {
  title: "DesktopNav",
  component: DesktopNav,
  decorators: [StoryRouter()],
};

export const Default = () => <DesktopNav user={users["alicethomas"]} />;
