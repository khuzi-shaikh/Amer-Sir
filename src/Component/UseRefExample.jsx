import { Button, TextField } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

export const UseRefExample = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [todo, setToDo] = useState([]);
  const inputRef1 = useRef("");
  const inputRef2 = useRef("");
  const handleAdd = () => {
    // if (!text.trim()) return;
    setToDo([...todo, text, text1]);
    setText("");
    setText1("");
    inputRef2.current.focus();
  };
  useEffect(() => {
    inputRef1.current.focus();
  }, []);
  return (
    <div>
      <input
        placeholder="Type Here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef1}
      />
      <TextField
        placeholder="Type Here..."
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        inputRef={inputRef2}
      />
      <Button variant="contained" onClick={handleAdd}>
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
