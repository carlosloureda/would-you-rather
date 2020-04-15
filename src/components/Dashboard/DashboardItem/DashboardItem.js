import React from "react";
import { Card, Row, Divider, Col, Typography, Button } from "antd";
import { useHistory } from "react-router-dom";

import "./DashboardItem.scss";
import Avatar from "../../Avatar";
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
        <Avatar avatarURL={avatarURL} size={125} sm={6} />
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
