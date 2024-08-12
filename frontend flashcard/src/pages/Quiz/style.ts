import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()({
  mainContainer: {
    height: "100vh",
  },
  container: {
    display: "flex",
    height: "75%",
    overflow: "auto",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    margin: "4px 15px 4px 15px",
  },
});
