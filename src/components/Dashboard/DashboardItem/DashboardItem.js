import React from "react";
import { Card, Row, Avatar, Divider, Col, Typography, Button } from "antd";
import { useHistory } from "react-router-dom";

import "./DashboardItem.scss";
import colors from "../../../styles/colors";

const DashboardItem = ({ authorName, avatarURL, previewText, questionUrl }) => {
  const history = useHistory();

  const onViewQuestion = () => {
    history.push(questionUrl);
  };

  return (
    <Card
      title={`${authorName} asks:`}
      bordered={true}
      headStyle={{
        backgroundColor: colors.themePrimaryColor,
        color: colors.white,
      }}
      style={{ margin: "25px 0" }}
    >
      <Row>
        <Col span={24} sm={8} className="card-avatar__container">
          <Avatar src={avatarURL} size={125} className="avatar" />
        </Col>
        <Col span={0} sm={1}>
          <Divider type="vertical" className="card-divider" />
        </Col>
        <Col span={24} sm={15}>
          <Typography.Title level={3}>Would You Rather ...</Typography.Title>
          <Typography.Paragraph className="card-detail__preview">
            {previewText}
          </Typography.Paragraph>
          <Button type="primary" block ghost onClick={onViewQuestion}>
            View poll
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default DashboardItem;
