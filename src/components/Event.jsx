import styled from "styled-components";
import eventData from "../data/Events.json"; 
import { EventCard } from "./EventCard"; 

// Styled component for the container that holds the event cards
const StyledEventContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  gap: 24px; 
  overflow-x: auto; 
`;

// Component that maps out the JSON data to display event cards
export const Event = () => {
  return (
    <StyledEventContainer>
      {eventData.map((event, index) => (
        <EventCard key={index} event={event} /> // Render an EventCard for each item in the JSON array
      ))}
    </StyledEventContainer>
  );
};

