import React from "react";
import StoryRouter from "storybook-react-router";

import UserInfo from "./UserInfo";
import { users } from "../../../api/api";

export default {
  title: "UserInfo",
  component: UserInfo,
  decorators: [StoryRouter()],
};

export const NoUser = () => <UserInfo />;
export const Default = () => <UserInfo user={users["alicethomas"]} />;
export const Desktop = () => (
  <UserInfo user={users["alicethomas"]} isMobile={false} />
);
export const Mobile = () => (
  <UserInfo user={users["alicethomas"]} isMobile={true} />
);
