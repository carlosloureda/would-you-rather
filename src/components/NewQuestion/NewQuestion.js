import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Row, Col, Form, Input, Button, Typography, Divider } from "antd";

import colors from "../../styles/colors";

import "./NewQuestion.scss";

const NewQuestion = () => {
  const [optionOne, setOptionOne] = React.useState("");
  const [optionTwo, setOptionTwo] = React.useState("");

  const history = useHistory();

  const onOptionOneChange = ({ target: { value: optionOne } }) =>
    setOptionOne(optionOne);

  const onOptionTwoChange = ({ target: { value: optionTwo } }) =>
    setOptionTwo(optionTwo);

  const onCreateQuestion = () => {
    console.log("question submitted with options: ", optionOne, optionTwo);
    history.push("/");
  };

  return (
    <Row justify="center" style={{ margin: "25px 0" }}>
      <Col span={22} sm={20} md={16}>
        <Card
          title={<p className="title">Create Question</p>}
          headStyle={{
            backgroundColor: colors.themePrimaryColor,
            textAlign: "center",
            color: colors.white,
            fontSize: "32px",
            fontWeight: 800,
          }}
        >
          <Form>
            <Typography.Title level={3} className="subtitle">
              Would You Rather ...
            </Typography.Title>
            <Form.Item>
              <Input
                placeholder="Enter option one"
                onChange={onOptionOneChange}
              />
            </Form.Item>
            <Divider>
              <Typography.Text>OR</Typography.Text>
            </Divider>
            <Form.Item>
              <Input
                placeholder="Enter option two"
                onChange={onOptionTwoChange}
              />
            </Form.Item>
            <Button
              type="primary"
              size="large"
              disabled={!optionOne || !optionTwo}
              block
              onClick={onCreateQuestion}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default NewQuestion;
