import { Button, TextField } from '@mui/material'
import React from 'react'
import { ThirdComp } from './ThirdComp'

export const SecondComp = () => {
  return (
    <div><h1>SecondComp </h1>
        <TextField label="Second" type="text"></TextField>
        <Button>Second</Button>
        <ThirdComp/>
    </div>
  )
}
