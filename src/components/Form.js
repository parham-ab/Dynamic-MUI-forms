import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
// icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";

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
    <Container maxWidth="lg">
      <Typography variant="h3" color="text.secondary" textAlign="center">
        Add new member
      </Typography>
      <form onSubmit={submitHandler}>
        {data.map((item, index) => (
          <Box component="div" key={index} display="flex" alignItems="center">
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  color="primary"
                  name="firstName"
                  label="FirstName"
                  type="text"
                  size="small"
                  variant="filled"
                  value={item.firstName}
                  onChange={(e) => changeHandle(index, e)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  color="primary"
                  name="lastName"
                  label="lastName"
                  type="text"
                  size="small"
                  variant="filled"
                  value={item.lastName}
                  onChange={(e) => changeHandle(index, e)}
                  fullWidth
                />
              </Grid>
            </Grid>
            {index > 0 && (
              <IconButton
                color="error"
                sx={{ margin: "15px 0" }}
                onClick={() => deleteHandler(index)}
                size="small"
              >
                <RemoveIcon />
              </IconButton>
            )}
            <IconButton
              color="success"
              sx={{ margin: "15px 0" }}
              onClick={() => addHandler()}
              size="small"
            >
              <AddIcon />
            </IconButton>
          </Box>
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
    </Container>
  );
};

export default Form;
