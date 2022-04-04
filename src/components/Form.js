import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

const Form = () => {
  const [data, setData] = useState([{ firstName: "", lastName: "" }]);
  // changeHandle
  const changeHandle = (index, e) => {
    const values = [...data];
    values[index][e.target.name] = e.target.value;
    setData(values);
  };
  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("data", data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {data.map((item, index) => (
          <div key={index}>
            <TextField
              name="firstName"
              label="FirstName"
              type="text"
              size="small"
              variant="filled"
              value={item.firstName}
              onChange={(e) => changeHandle(index, e)}
            />
            <TextField
              name="lastName"
              label="lastName"
              type="text"
              size="small"
              variant="filled"
              value={item.lastName}
              onChange={(e) => changeHandle(index, e)}
            />
            <IconButton>
              <RemoveIcon />
            </IconButton>
            <IconButton>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Button
          onClick={submitHandler}
          size="small"
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
