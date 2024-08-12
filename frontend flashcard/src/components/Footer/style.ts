import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    color: "white",
    background: theme.palette.primary.main,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "clamp(12px, 6px + 1vw, 20px)",
  },
  icon: {
    fontSize: "clamp(18px, 12px + 2vw, 30px)",
    marginRight: "clamp(5px, 4px + 1vw, 20px)",
    marginLeft: "clamp(5px, 5px + 1vw, 20px)",
    color: "white",
  },
}));
