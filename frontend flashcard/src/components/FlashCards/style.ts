import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    width: "clamp(150px, 130px + 5vw + 4vw, 300px)",
    height: "clamp(150px, 130px + 5vw + 4vw, 350px)",
    border: `2px solid ${theme.palette.primary.main}`,
    display: "flex",
    flexDirection: "column",
    padding: "clamp(10px, 8px + 1vw, 20px)",
  },
  textSection: {
    textAlign: "center",
    fontSize: "clamp(12px, 10px + 1vw, 18px)",
    alignItems: "center",
    justifyContent: "center",
  },
  iconSection: {
    justifyContent: "space-between",
  },
}));
