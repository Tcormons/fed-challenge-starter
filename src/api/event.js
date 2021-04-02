import charlesThumb from "../Assets/charles-race-thumb.jpg";
import charlesTrainer from "../Assets/charles-race-trainer.jpg";

import fullThumb from "../Assets/full-body-hiit-thumb.jpg";
import fullTrainer from "../Assets/full-body-hiit-trainer.jpg";

import kafueThumb from "../Assets/kafue-river-thumb.jpg";
import kafueTrainer from "../Assets/kafue-river-trainer.jpg";

import lakeThumb from "../Assets/lake-inniscarra-thumb.jpg";
import lakeTrainer from "../Assets/lake-inniscarra-trainer.jpg";

import minutesThumb from "../Assets/20-minutes-to-toned-thumb.jpg";
import minutesTrainer from "../Assets/20-minutes-to-toned-trainer.jpg";

import performanceThumb from "../Assets/performance-series-thumb.jpg";
import performanceTrainer from "../Assets/performance-series-trainer.jpg";

import shredThumb from "../Assets/shred-and-burn-thumb.jpg";
import shredTrainer from "../Assets/shred-and-burn-trainer.jpg";

import slowThumb from "../Assets/slow-pulls-thumb.jpg";
import slowTrainer from "../Assets/slow-pulls-trainer.jpg";

export async function getEvents() {
  const mockEventList = [
    {
      id: "123",
      eventName: "Lake Inniscarra, Ireland -- Pryamid",
      thumb: lakeThumb,
      trainer: lakeTrainer,
      duration: "30:53",
      members: "6,248",
      workouts: 1,
      details: true,
    },
    {
      id: "234",
      eventName: "Performance Series",
      thumb: performanceThumb,
      trainer: performanceTrainer,
      workouts: 9,
    },
    {
      id: "345",
      eventName: "Slow Pulls and Fast Intervals",
      thumb: slowThumb,
      trainer: slowTrainer,
      duration: "44:13",
      members: "9,948",
      workouts: 1,
    },
    {
      id: "456",
      eventName: "20 Minutes to Toned",
      thumb: minutesThumb,
      trainer: minutesTrainer,
      workouts: 12,
    },
    {
      id: "567",
      eventName: "Charles Race, Boston, Massachusetts",
      thumb: charlesThumb,
      trainer: charlesTrainer,
      duration: "36:22",
      members: "8,648",
      workouts: 1,
    },
    {
      id: "678",
      eventName: "Full-Body HIIT Series",
      thumb: fullThumb,
      trainer: fullTrainer,
      workouts: 12,
    },
    {
      id: "789",
      eventName: "Kafue River, Zambia -- Power Stroke Pyramid",
      thumb: kafueThumb,
      trainer: kafueTrainer,
      duration: "22:22",
      members: "4,660",
      workouts: 1,
    },
    {
      id: "890",
      eventName: "Shred & Burn Series",
      thumb: shredThumb,
      trainer: shredTrainer,
      workouts: 16,
    },
  ];

  return mockEventList;
}
