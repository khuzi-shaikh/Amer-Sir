import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./UseRefPractice.css";

export const UseRefPractice = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [todo, setToDo] = useState([]);
  const refrence = useRef("");
  const refrence2 = useRef("");
  const refrence3 = useRef("");
  const refrence4 = useRef("");
  const handleAdd = () => {
    setToDo([...todo, text, text2, text3, text4]);
    setText("");
    setText2("");
    setText3("");
    setText4("");
    refrence.current.focus();
  };
  useEffect(() => {
    refrence4.current.focus();
  }, []);
  return (
    <div className="ref">
      <TextField
        variant="outlined"
        value={text}
        label="First Name"
        onChange={(e) => setText(e.target.value)}
        inputRef={refrence}
      />{" "}
      <TextField
        variant="outlined"
        value={text2}
        label="Last Name"
        onChange={(e) => setText2(e.target.value)}
        inputRef={refrence2}
      />{" "}
      <TextField
        variant="outlined"
        value={text3}
        label="City"
        onChange={(e) => setText3(e.target.value)}
        inputRef={refrence3}
      />{" "}
      <TextField
        variant="outlined"
        value={text4}
        label="State"
        onChange={(e) => setText4(e.target.value)}
        inputRef={refrence4}
      />{" "}
      <Button id="B" variant="contained" onClick={handleAdd}>
        Add
      </Button>
      <ol>
        {todo.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </div>
  );
};
