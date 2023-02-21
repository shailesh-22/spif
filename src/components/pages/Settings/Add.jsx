import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";

function Add() {
  const [inputs, setInputs] = useState(['']);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <TextField
            value={input}
            onChange={(event) => handleInputChange(event, index)}
            variant="outlined"
            margin="normal"
            label={`Input ${index + 1}`}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleRemoveInput(index)}
          >
            Remove Input
          </Button>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleAddInput}>
        Add Input
      </Button>
    </div>
  );
}

export default Add;
