import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cardContainer: {
    height: 375,
    position: "relative",
    cursor: "pointer",
  },
  cardMediaContainer: {
    height: 200,
  },
  cardContentTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContentEventDetailsContainer: {
    display: "flex",
  },
  eventDetailsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eventDetailsImage: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    margin: theme.spacing(1),
  },
  eventLink: {
    paddingTop: theme.spacing(2),
    color: "#4393FF",
    cursor: "pointer",
  },
  workoutOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#0000007a",
    width: "fit-content",
    height: "100%",
  },
  seriesContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: theme.spacing(5),
    "& .MuiTypography-root": {
      color: "white",
    },
  },
  seriesImage: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: theme.spacing(1),
    marginLeft: theme.spacing(4),
  },
}));
