
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 357px; 
  height: 376px; 
`;



export const HeroCard = () => {
  const buttonsWithImages = buttonData.filter((item) => item.imageId);

  return (
    <StyledHeroCardContainer>
      {buttonsWithImages.map((item, index) => (
        <StyledImageContainer key={index}>
          <img
            src={item.imageId}
            alt={item.buttonText}
            style={{
              borderRadius: "12px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div style={{ width: "236px", position: "relative" }}>
            <Buttons buttonList={[item]} />
          </div>
        </StyledImageContainer>
      ))}
    </StyledHeroCardContainer>
  );
};
