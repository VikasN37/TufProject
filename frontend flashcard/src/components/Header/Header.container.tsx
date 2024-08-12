import { Grid, Typography } from "@mui/material";
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <Grid container className={classes.container}>
      <Grid item onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
        <Typography fontSize="inherit" fontFamily={"inherit"}>
          Flashcard App
        </Typography>
      </Grid>

      <Grid item className={classes.dashboard} onClick={() => navigate("/")}>
        <Typography fontSize="inherit" fontFamily={"inherit"}>
          Quiz
        </Typography>
      </Grid>
      <Grid
        item
        className={classes.dashboard}
        onClick={() => navigate("/dashboard")}
      >
        <Typography fontSize="inherit" fontFamily={"inherit"}>
          Dashboard
        </Typography>
      </Grid>
    </Grid>
  );
}
