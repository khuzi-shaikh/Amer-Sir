import { Button, TextField } from '@mui/material'
import React from 'react'
import { SecondComp } from './SecondComp'


export const FirstComp = () => {
  return (
    <div><h1>FirstComp</h1>
        <TextField label="First" type="text"></TextField>
        <Button>First</Button>
        <SecondComp/>
    </div>
  )
}
 