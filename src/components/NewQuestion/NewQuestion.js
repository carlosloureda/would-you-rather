import React from "react";
import { useHistory } from "react-router-dom";

const NewQuestion = () => {
  const history = useHistory();

  const onCreateQuestion = () => {
    console.log("question submitted");
    history.push("/");
  };
  return (
    <div>
      <h1>Hi from NewQuestion page!</h1>
      <button onClick={onCreateQuestion}>Create</button>
    </div>
  );
};

export default NewQuestion;
