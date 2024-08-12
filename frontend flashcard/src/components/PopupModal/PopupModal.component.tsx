import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useStyles } from "./style";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constants";

interface ModalType {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number | undefined;
}

export function PopupModal({ setOpen, id }: ModalType) {
  const [updateContent, setUpdateContent] = useState({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.name, e.target.value);

    setUpdateContent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .put(`${BACKEND_URL}/api/v1/cards/update/${id}`, updateContent)
      .then(() => {});
    location.reload();
  }

  const { classes } = useStyles();
  return (
    <Grid container className={classes.container}>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h6" marginBottom={2} textAlign={"center"}>
          Edit Question/Answer
        </Typography>
        <TextField
          fullWidth
          id="email"
          label="Enter Question"
          name="question"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          label="Enter Answer"
          fullWidth
          name="answer"
          onChange={handleChange}
          id="password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2 }}
        >
          Edit
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ mb: 2 }}
          onClick={() => {
            setOpen(false);
          }}
        >
          Close
        </Button>
      </Box>
    </Grid>
  );
}
