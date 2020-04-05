import styled from "styled-components";

const EventItem = styled.div`
  margin: 2rem;
  display: flex;
  border-radius: 5px;
  border: 1px solid;
  box-shadow: 1px 2px #909090;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const Content = styled.div`
  margin: 3px;
  padding: 6px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3``;

const Date = styled.h4``;

const Button = styled.button``;
export { EventItem, Title, Date, Content, Button };
