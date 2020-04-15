import React from "react";
import LeaderCard from "./LeaderCard";
import { Row } from "antd";

import "./Leaderboard.scss";

const Leaderboard = ({ users }) => {
  return (
    <Row type="flex" justify="center" style={{ margin: "25px 0px" }}>
      {users &&
        users.map((user, index) => (
          <LeaderCard key={user.id} user={user} rank={index + 1} />
        ))}
    </Row>
  );
};

export default Leaderboard;
