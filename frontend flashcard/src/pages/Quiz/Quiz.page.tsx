import { Box, Grid, Typography } from "@mui/material";
import { FlashCard } from "../../components/FlashCards/FlashCards.component";
import { useStyles } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constants";

export function Quiz() {
  const { classes } = useStyles();
  const [allCards, setAllCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

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

  const flashcard = allCards.length > 0 ? allCards[currentCard] : null;
  const totalCard = allCards.length;

  console.log(allCards[0]);
  console.log(allCards);
  return (
    <Grid container className={classes.mainContainer}>
      <Header />
      {allCards.length == 0 && (
        <Box width={"100%"}>
          <Typography variant="h5" textAlign={"center"}>
            No Questions. Try adding some by going to Dashboard
          </Typography>
        </Box>
      )}
      {allCards.length > 0 && (
        <Grid container className={classes.container}>
          <FlashCard flashcard={flashcard} showEditDel={false} />
        </Grid>
      )}

      <Footer
        totalCards={totalCard}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
      />
    </Grid>
  );
}
