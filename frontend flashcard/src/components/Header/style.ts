import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    color: "white",
    height: "70px",
    background: theme.palette.primary.main,
    padding: "2px 15px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "clamp(13px, 9px + 1vw, 22px)",
    alignItems: "center",
  },
  dashboard: {
    padding: "5px",
    cursor: "pointer",
  },
}));
