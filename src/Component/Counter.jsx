import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);
  const incrementCount = () => {
    setValue((count) => count  + 1);
  };
  const decrementCount = () => {
    setValue((count) => count<= - 1);
  };
  const reset = () => {
    setValue(0);
  };
  return (
    <div>
      <h1>This is Counter :</h1>
      <Grid container spacing={10}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={incrementCount}>
            +
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h3>{value}</h3>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="error" onClick={decrementCount}>
            -
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" color="error" onClick={reset}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
