import React from "react";
import { Avatar, Col } from "antd";

import "./Avatar.scss";

const AvatarWrapper = ({ avatarURL, size = 125, sm = 6 }) => {
  return (
    <Col span={24} sm={sm} className="card-avatar__container">
      <Avatar src={avatarURL} size={size} className="avatar" />
    </Col>
  );
};

export default AvatarWrapper;
