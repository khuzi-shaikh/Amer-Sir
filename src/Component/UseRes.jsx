import React, { useEffect, useRef, useState } from "react";

export const UseRes = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [todo, setToDo] = useState([]);
  const inputRef = useRef("");
  const inputRef1 = useRef("");
  const inputRef2 = useRef("");
  const inputRef3 = useRef("");
  const handleAdd = () => {
    setToDo([...todo, text, text1, text2, text3]);
    inputRef.current.focus()
  };
useEffect(()=>{
  inputRef3.current.focus()
},[])
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />
      <input
        type="text"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        ref={inputRef1}
      />
      <input
        type="text"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
        ref={inputRef2}
      />
      <input
        type="text"
        value={text3}
        onChange={(e) => setText3(e.target.value)}
        ref={inputRef3}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
