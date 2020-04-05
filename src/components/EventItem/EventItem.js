import React from "react";

import { EventItem as Item, Title, Date, Content, Button } from "./styles";

const EventItem = ({ title }) => {
  return (
    <Item>
      <Content>
        <Title>{title}</Title>
        <Date>Date</Date>

        <Button>TEST</Button>
      </Content>
    </Item>
  );
};
export default EventItem;
