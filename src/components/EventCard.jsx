import styled from "styled-components";

// Styled component for the event card
const StyledEventCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 350px;
  margin: 0 auto;
  font-family: Avenir;
  font-weight: 500;
`;

// Styled component for the event image
const StyledEventImage = styled.img`
  width: 100%;
  height: 234px;
  object-fit: cover;
  border-radius: 12px;
`;

// Styled component for the event title
const StyledEventTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

//Styled component for the date and description
const StyledDateDescription = styled.div`
text-align: left;

`;

// Styled component for the event date
const StyledEventDate = styled.p`
  font-size: 18px;
  color: #000;
  text-align: left;
  margin-bottom: 16px;
`;

// Styled component for the event description
const StyledEventDescription = styled.p`
  font-size: 18px;
  color: #000;
  line-height: 1.5;
`;

// Styled component for the event button
const StyledEventButton = styled.button`
  background: #b3583b;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #552a1c;
  }
`;

export const EventCard = ({ event }) => {
  return (
    <StyledEventCard>
      <StyledEventImage src={event.image} alt={event.title} />
      <StyledEventTitle>{event.title}</StyledEventTitle>
      <StyledDateDescription>
        <StyledEventDate>{event.date}</StyledEventDate>
        <StyledEventDescription>{event.description}</StyledEventDescription>
      </StyledDateDescription>
      <StyledEventButton>{event.buttonLabel}</StyledEventButton>
    </StyledEventCard>
  );
};
