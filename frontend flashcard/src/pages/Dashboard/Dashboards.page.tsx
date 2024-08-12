import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useStyles } from "./style";
import { FlashCard } from "../../components/FlashCards/FlashCards.component";
import { Header } from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../constants";

function AddCard() {
  const [card, setCard] = useState({});
  const { classes } = useStyles();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCard((prevVal) => ({ ...prevVal, [e.target.name]: e.target.value }));
  }

  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.post(`${BACKEND_URL}/api/v1/cards/create`, card).then(() => {
      location.reload();
    });
  }
  return (
    <Box
      sx={{
        margin: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography className={classes.heading}>Add question</Typography>
      <Box component="form" onSubmit={handleAdd} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Enter Question"
          onChange={handleChange}
          name="question"
        />
        <TextField
          margin="normal"
          label="Enter Answer"
          onChange={handleChange}
          fullWidth
          name="answer"
          id="ans"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}

function DeleteEdit() {
  const [allCards, setAllCards] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/cards/getcards/`
        );
        setAllCards(response?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCards();
  }, []);

  const { classes } = useStyles();
  return (
    <Box
      sx={{
        margin: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Typography className={classes.heading}>
        Edit and Delete Question
      </Typography>
      <Grid container className={classes.allCards}>
        {allCards.map((flashcard) => (
          <FlashCard flashcard={flashcard} showEditDel={true} />
        ))}
      </Grid>
    </Box>
  );
}

export function Dashboard() {
  return (
    <>
      <Header />
      <AddCard />
      <DeleteEdit />
    </>
  );
}
