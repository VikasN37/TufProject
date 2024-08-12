import { Box, Grid, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useStyles } from "./style";

interface FooterType {
  totalCards: number;
  currentCard: number;
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>;
}

export function Footer({
  totalCards,
  currentCard,
  setCurrentCard,
}: FooterType) {
  const { classes } = useStyles();
  return (
    <Grid container className={classes.container}>
      <Box
        width="50%"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {currentCard > 0 && (
          <IconButton
            onClick={() => setCurrentCard((currentCard) => currentCard - 1)}
          >
            <ArrowBackIosIcon className={classes.icon} />
          </IconButton>
        )}
        {currentCard + 1} / {totalCards}
        {currentCard < totalCards - 1 && (
          <IconButton
            onClick={() => setCurrentCard((currentCard) => currentCard + 1)}
          >
            <ArrowForwardIosIcon className={classes.icon} />
          </IconButton>
        )}
      </Box>
    </Grid>
  );
}
