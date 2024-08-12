import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  container: {
    width: "400px",
    margin: "10px",
    justifyContent: "center",
    background: "white",
    padding: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
}));
