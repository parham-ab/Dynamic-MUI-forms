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
  // add form
  const addHandler = () => {
    setData([...data, { firstName: "", lastName: "" }]);
  };
  // delete form
  const deleteHandler = (index) => {
    const values = [...data];
    values.splice(index, 1);
    setData(values);
  };

  return (
    <div>
      <h1>Add new member</h1>
      <form onSubmit={submitHandler}>
        {data.map((item, index) => (
          <div key={index}>
            <TextField
              color="warning"
              sx={{
                width: "150px",
                padding: "0px 5px 10px",
                marginTop: "10px",
              }}
              name="firstName"
              label="FirstName"
              type="text"
              size="small"
              variant="filled"
              value={item.firstName}
              onChange={(e) => changeHandle(index, e)}
            />
            <TextField
              color="warning"
              sx={{ width: "150px", padding: "0 5px 10px", marginTop: "10px" }}
              name="lastName"
              label="lastName"
              type="text"
              size="small"
              variant="filled"
              value={item.lastName}
              onChange={(e) => changeHandle(index, e)}
            />
            {index > 0 && (
              <IconButton
                color="error"
                sx={{ margin: "15px 0" }}
                onClick={() => deleteHandler(index)}
              >
                <RemoveIcon />
              </IconButton>
            )}
            <IconButton
              color="success"
              sx={{ margin: "15px 0" }}
              onClick={() => addHandler()}
            >
              <AddIcon />
            </IconButton>
            <hr />
          </div>
        ))}
        <Button
          sx={{ margin: "5px" }}
          onClick={submitHandler}
          size="small"
          type="submit"
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
