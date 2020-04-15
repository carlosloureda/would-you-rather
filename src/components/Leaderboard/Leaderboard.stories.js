import React from "react";
import StoryRouter from "storybook-react-router";

import Leaderboard from "./Leaderboard";
import { users } from "../../api/api";

export default {
  title: "Leaderboard",
  component: Leaderboard,
  decorators: [StoryRouter()],
};

export const Default = () => <Leaderboard users={Object.values(users)} />;
