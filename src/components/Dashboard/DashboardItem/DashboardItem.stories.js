import React from "react";
import StoryRouter from "storybook-react-router";

import DashboardItem from "./DashboardItem";
import { users } from "../../../api/api";

export default {
  title: "DashboardItem",
  component: DashboardItem,
  decorators: [StoryRouter()],
};

export const Default = () => (
  <DashboardItem
    authorName={users["alicethomas"].name}
    avatarURL={users["alicethomas"].avatarURL}
    previewText="...always be 10 mi..."
    questionUrl="/questions/101"
  />
);
