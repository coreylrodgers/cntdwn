import React from "react";

import EventItem from "../EventItem/EventItem";

export const EventList = () => {
  const arr = [
    { title: "Camping" },
    { title: "Fishing" },
    { title: "Eating" },
    { title: "Swimming" },
  ];
  return (
    <div>
      {arr.map((item, index) => (
        <EventItem key={index} title={item.title} />
      ))}
    </div>
  );
};

export default EventList;
