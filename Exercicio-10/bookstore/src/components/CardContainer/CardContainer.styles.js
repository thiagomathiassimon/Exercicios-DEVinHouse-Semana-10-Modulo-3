import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 600,
    maxWidth: "75%",
    margin: "2%",
    backgroundColor: "#282a36",
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 14,
  },
  pos: {
    color: "white",
    marginBottom: 12,
  },
}));
