import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import useStyles from "./evetCardStyles";

import TimerIcon from "../Assets/timer-icon.png";
import TrackIcon from "../Assets/track-icon.png";
import SeriesIcon from "../Assets/series-icon.png";

export const EventCard = ({
  thumb,
  eventName,
  trainer,
  duration,
  members,
  workouts,
  details,
}) => {
  const classes = useStyles();

  const [cardHover, setCardHover] = useState(false);

  return (
    <Card
      className={classes.cardContainer}
      elevation={cardHover ? 9 : 3}
      onMouseOver={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.cardMediaContainer}
          image={thumb}
          src="image"
        />
        {workouts > 1 ? (
          <Box className={classes.workoutOverlay}>
            <Box className={classes.seriesContainer}>
              <Typography variant="h5" color="initial">
                {workouts}
              </Typography>
              <Typography variant="overline" color="initial">
                Workouts
              </Typography>
              <img
                src={SeriesIcon}
                alt="series"
                className={classes.seriesImage}
              />
            </Box>
          </Box>
        ) : null}
      </CardActionArea>
      <CardContent>
        <Box className={classes.cardContentTitleContainer}>
          <Typography variant="h5">{eventName}</Typography>
          <Avatar variant="square" src={trainer} />
        </Box>
        {workouts > 1 ? null : (
          <>
            <Box className={classes.cardContentEventDetailsContainer}>
              <Box className={classes.eventDetailsContainer}>
                <img
                  src={TimerIcon}
                  alt="timer"
                  className={classes.eventDetailsImage}
                />
                <Typography variant="subtitle1">{duration}</Typography>
              </Box>
              <Box className={classes.eventDetailsContainer}>
                <img
                  src={TrackIcon}
                  alt="tracker"
                  className={classes.eventDetailsImage}
                />
                <Typography variant="subtitle1">{members}</Typography>
              </Box>
            </Box>
            {details && (
              <Typography
                variant="h6"
                color="primary"
                className={classes.eventLink}
              >
                View Details
              </Typography>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

EventCard.propTypes = {
  thumb: PropTypes.string,
  eventName: PropTypes.string,
  trainer: PropTypes.string,
  duration: PropTypes.string,
  members: PropTypes.string,
  workouts: PropTypes.number,
  details: PropTypes.bool,
};
