import { Box, Grid, IconButton, Modal, Paper, Typography } from "@mui/material";
import { useStyles } from "./style";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteOutline } from "@mui/icons-material";
import { PopupModal } from "../PopupModal";
import axios from "axios";
import { BACKEND_URL } from "../../constants";

interface FlashCardType {
  idcards: number;
  question: string;
  answer: string;
}

export function FlashCard({
  flashcard,
  showEditDel,
}: {
  flashcard: FlashCardType | null;
  showEditDel: boolean;
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [open, setOpen] = useState(false);
  const { classes } = useStyles();

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    axios
      .delete(`${BACKEND_URL}/api/v1/cards/delete/${flashcard?.idcards}`)
      .then(() => {
        location.reload();
      });
  }
  return (
    <Paper elevation={9} className={classes.container}>
      {showEditDel && (
        <Grid container item className={classes.iconSection}>
          <IconButton onClick={handleDelete}>
            <DeleteOutline />
          </IconButton>
          <IconButton onClick={() => setOpen(true)}>
            <EditIcon />
          </IconButton>
        </Grid>
      )}

      <Grid
        container
        item
        className={classes.textSection}
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
        sx={{ height: showEditDel ? "85%" : "100%" }}
      >
        {showAnswer && (
          <Typography fontSize="inherit" fontFamily="inherit">
            {flashcard?.answer}
          </Typography>
        )}
        {!showAnswer && (
          <Typography fontSize="inherit" fontFamily="inherit">
            {flashcard?.question}
          </Typography>
        )}
      </Grid>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          height="100%"
        >
          <PopupModal setOpen={setOpen} id={flashcard?.idcards} />
        </Grid>
      </Modal>
    </Paper>
  );
}
