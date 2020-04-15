import React from "react";
import { Card, Row, Col, Typography, Divider } from "antd";
import { TrophyOutlined } from "@ant-design/icons";

import colors from "../../../styles/colors";
import "./LeaderCard.scss";
import Avatar from "../../Avatar";

const LeaderCard = ({ user, rank }) => {
  const totalQuestionAsked = user.questions.length;
  const totalQuestionAnswered = Object.values(user.answers).length;
  const totalScore = totalQuestionAnswered + totalQuestionAsked;

  const getTrophyClassName = (rank) => ["gold", "silver", "bronze"][rank - 1];

  return (
    <Col span={22} sm={20} md={16} style={{ margin: "10px 0" }}>
      <Card bordered={true}>
        <div className={`trophy__container trophy-${getTrophyClassName(rank)}`}>
          <TrophyOutlined />
        </div>
        <Row justify="space-between">
          <Avatar avatarURL={user.avatarURL} size={125} sm={6} />
          <Col span={24} sm={10}>
            <Typography.Title level={2} className="leader-card__title">
              {user.name}
            </Typography.Title>
            <Row className="leader-card__info">
              <Typography.Paragraph>Answered Questions</Typography.Paragraph>
              <Typography.Paragraph>
                {totalQuestionAnswered}
              </Typography.Paragraph>
            </Row>
            <Divider type="horizontal" />
            <Row className="leader-card__info">
              <Typography.Paragraph>Created Questions</Typography.Paragraph>
              <Typography.Paragraph>{totalQuestionAsked}</Typography.Paragraph>
            </Row>
          </Col>
          <Col span={24} sm={6} style={{ backgroundColor: "red" }}>
            <Card
              bordered={true}
              title={<strong>Score</strong>}
              headStyle={{
                backgroundColor: colors.themePrimaryColor,
                color: colors.white,
                display: "flex",
                justifyContent: "center",
              }}
              bodyStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="score-badge">
                <span>{totalScore}</span>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default LeaderCard;
