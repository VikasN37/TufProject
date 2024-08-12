import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  mainContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: "clamp(15px, 11px + 1vw + 1vh, 22px)",
    textAlign: "center",
    fontFamily: "inherit",
  },
  formSection: {
    width: "75%",
    height: "400px",
    border: "1px solid red",
  },
  allCards: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
}));
