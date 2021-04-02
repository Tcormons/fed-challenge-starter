import React, { useState, useEffect } from "react";

import { Container, Grid, Typography } from "@material-ui/core";

import { EventCard } from "../EventCard/EventCard";

import { getEvents } from "../api/event";

import useStyles from "./homePageStyles";

export const HomePage = () => {
  const classes = useStyles();

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    handleGetEventList();
  }, []);

  const handleGetEventList = async () => {
    try {
      const getEventsResponse = await getEvents();
      setEventList(getEventsResponse);
    } catch (error) {
      console.log("There was an error in the GET request", error);
    }
  };

  return (
    <Container className={classes.homePageContainer} maxWidth="xl">
      <Grid container>
        {!eventList.length ? (
          <Typography variant="h5">No Events are available</Typography>
        ) : (
          eventList.map((event, index) => (
            <Grid
              item
              xs={3}
              key={`${index}-${event.id}`}
              style={{ padding: 32 }}
            >
              <EventCard
                thumb={event.thumb}
                eventName={event.eventName}
                trainer={event.trainer}
                duration={event.duration}
                members={event.members}
                workouts={event.workouts}
                details={event.details}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};
