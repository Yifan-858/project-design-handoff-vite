import styled from "styled-components";
import buttonData from "../data/Buttons.json";
import { Buttons } from "./Buttons";

// Parent container with relative positioning
const StyledHeroCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

// Container for image and button, with relative positioning
const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  width: 357px;
  height: 376px;

  border-radius: 12px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) =>
    `url(${props.imagesrc})`}; //pass in the img as the background img

  .hero-btn {
    margin-top: 50px;
  }
`;

export const HeroCard = () => {
  const buttonsWithImages = buttonData.filter((item) => item.imageId);

  return (
    <StyledHeroCardContainer>
      {buttonsWithImages.map((item, index) => (
        <StyledImageContainer key={index} imagesrc={item.imageId}>
          <Buttons buttonText={item.buttonText} fontSize={15} />
        </StyledImageContainer>
      ))}
    </StyledHeroCardContainer>
  );
};
