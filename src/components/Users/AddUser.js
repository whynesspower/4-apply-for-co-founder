import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please valid Non-Empty Name and Work Experience",
      });
      return;
    }
    // enteredAge is a string and not a number.
    // still we add this "+ " symbol to ensure type conversion.

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Work Experience",
        message: "Please enter greater than >1 years of experience",
      });
      return;
    }
    // console.log(enteredAge, enteredUsername);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age"> Work Experience (years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Apply for Co-Founder!</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
