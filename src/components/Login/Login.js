import React from "react";
import { Row, Col, Card, Typography, Button, Select, Avatar } from "antd";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";

import { users } from "../../api/api";
import "./Login.scss";

const Login = () => {
  const [userId, setUserId] = React.useState(null);
  const history = useHistory();

  const onUserSelect = (userId) => setUserId(userId);

  const onLogin = () => {
    //TODO: selected user avatar is not shown on the select
    //TODO: Add Redux
    console.log("logged in user :", userId);
    history.push("/");
  };

  return (
    <Row justify="center" className="container">
      {/* <Col xs={22} sm={12} lg={8}> */}
      <Col span={24} className="login-form__container">
        <Card
          className="login-form"
          cover={
            <img
              alt="redux"
              src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
            />
          }
        >
          <Typography.Title level={1}>
            Welcome to Would You Rather!
          </Typography.Title>
          <Typography.Title level={3}>
            Please sign in to continue
          </Typography.Title>

          <Select
            placeholder="Select a user"
            size="large"
            autoFocus
            style={{ width: "100%", margin: "20px 0" }}
            onChange={onUserSelect}
          >
            {Object.values(users).map((user) => (
              <Select.Option key={user.id} value={user.id}>
                <Avatar
                  src={user.avatarURL}
                  size="small"
                  style={{ marginRight: "5px" }}
                />
                {user.name}
              </Select.Option>
            ))}
          </Select>
          <Button
            type="primary"
            block
            size={"large"}
            onClick={onLogin}
            disabled={!userId ? true : false}
          >
            Login
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
