import React from "react";
import { Card, Row, Divider, Col, Typography, Button } from "antd";

import Avatar from "../../Avatar";
import colors from "../../../styles/colors";

const AnswerQuestion = ({ title, avatarURL, children }) => {
  return (
    <Card
      title={`${title}:`}
      bordered={true}
      headStyle={{
        backgroundColor: colors.themePrimaryColor,
        color: colors.white,
      }}
      style={{ margin: "25px 0" }}
    >
      <Row>
        <Avatar avatarURL={avatarURL} size={125} sm={6} />
        <Col span={0} sm={1}>
          <Divider type="vertical" className="card-divider" />
        </Col>
        <Col span={24} sm={15}>
          {children}
        </Col>
      </Row>
    </Card>
  );
};

export default AnswerQuestion;
