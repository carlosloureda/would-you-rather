import React from "react";
import { Tabs, Row, Col, Typography } from "antd";

import DashboardItem from "./DashboardItem";

import { users } from "../../api/api";

const parseQuestion = (question) => {
  return {
    authorName: users[question.author].name,
    avatarURL: users[question.author].avatarURL,
    previewText: `...${question.optionOne.text.substring(0, 15)}...`,
    questionUrl: `/questions/${question.id}`,
  };
};

const EmptyText = () => (
  <Typography.Title level={2} justify="center" style={{ textAlign: "center" }}>
    There are no questions here yet!
  </Typography.Title>
);

const Dashboard = ({ answeredQuestions = [], unAnsweredQuestions = [] }) => {
  const renderTabContent = (questions) => {
    if (!questions || !questions.length) return <EmptyText />;
    else {
      return questions.map((question) => (
        <DashboardItem key={question.id} {...parseQuestion(question)} />
      ));
    }
  };
  return (
    <Row justify="center" style={{ margin: "50px 0" }}>
      <Col sm={20} md={16}>
        <Tabs
          type="card"
          tabBarStyle={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs.TabPane tab="Unanswered Questions" key="1">
            {renderTabContent(unAnsweredQuestions)}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Answered Questions" key="2">
            {renderTabContent(answeredQuestions)}
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Dashboard;
