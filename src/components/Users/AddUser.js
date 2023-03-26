import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    // enteredAge is a string and not a number.
    // still we add this "+ " symbol to ensure type conversion.

    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredAge, enteredUsername);

    setEnteredAge("");
    setEnteredUsername("");
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
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={ageChangeHandler}
        />
        <label htmlFor="age"> Work Experience (years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={usernameChangeHandler}
        />
        <Button type="submit">Apply for Co-Founder!</Button>
      </form>
    </Card>
  );
};
export default AddUser;
