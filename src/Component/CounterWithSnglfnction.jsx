import { Button } from "@mui/material";
import React, { useState } from "react";

export const CounterWithSnglfnction = () => {
  const [count, setCount] = useState(0);
  const handleClick = (val) => {
    setCount(count + val);
};
 const handleClicks = (val) => {
     setCount(0);

 }
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>This Is Counter</h1>
      <br /><br />
      <Button variant="contained" onClick={() => handleClick(+1)}>
        +
      </Button>
      <h1>{count}</h1>
      <Button variant="contained" color="error" onClick={() => handleClick(-1)}>
        -
      </Button><br /><br />
      <Button variant="outlined" color="error" onClick={() => handleClicks(0)}>Resest</Button>
    </div>
  );
};
