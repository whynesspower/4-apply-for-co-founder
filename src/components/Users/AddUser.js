import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredAge, enteredUsername);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username"> Username</label>
        <input type="text" id="username" onChange={ageChangeHandler} />
        <label htmlFor="age"> Work Experience (years)</label>
        <input type="number" id="age" onChange={usernameChangeHandler} />
        <Button type="submit">Apply for Co-Founder!</Button>
      </form>
    </Card>
  );
};
export default AddUser;
