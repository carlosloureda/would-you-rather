import React from "react";
import StoryRouter from "storybook-react-router";

import LeaderCard from "./LeaderCard";
import { users } from "../../../api/api";

export default {
  title: "LeaderCard",
  component: LeaderCard,
  decorators: [StoryRouter()],
};

export const Default = () => <LeaderCard user={users["alicethomas"]} />;
export const FirstRank = () => (
  <LeaderCard user={users["alicethomas"]} rank={1} />
);
export const SecondRank = () => (
  <LeaderCard user={users["alicethomas"]} rank={2} />
);
export const ThirdRank = () => (
  <LeaderCard user={users["alicethomas"]} rank={3} />
);
