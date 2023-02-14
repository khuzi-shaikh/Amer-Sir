import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const TodoPractice = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const handlebutton =()=>{
    if (!text.trim())
    return
    setTodo([...todo, text])
    setText('')
  }
  return (
    <div>
      <h1>This ToDo List</h1>
      <TextField
        type="text"
        placeholder="Add ToDo"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></TextField>{" "}
      <Button onClick={()=>handlebutton()} variant="contained" value={text}>
        Add Value
      </Button>
      {todo.map((item, index) => {
        return <li>{item}</li>;
      })}
    </div>
  );
};