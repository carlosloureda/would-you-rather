import React from "react";
import { Avatar, Button } from "antd";
import { useHistory } from "react-router-dom";

import "./UserInfo.scss";

const UserInfo = ({ user, isMobile }) => {
  const history = useHistory();
  const onLogout = () => {
    // TODO: implement Redux
    history.push("/login");
  };

  if (!user || !user.name) {
    return null;
  }

  return (
    <div className={`user-info ${isMobile ? "mobile" : ""}`}>
      <div className="user-info__content">
        <span className="user-info__name">{user.name}</span>
        <Avatar src={user.avatarURL} size="small" />
      </div>
      <Button type="link" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default UserInfo;
