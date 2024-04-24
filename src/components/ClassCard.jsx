import styled from "styled-components";
import buttonData from "../data/Buttons.json";
import { Buttons } from "./Buttons"; 

// Styled container for the class card
const StyledClassCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 572px;
  padding: 16px 32px;
  gap: 48px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

// Styled component for the class image
const StyledClassImage = styled.img`
  width: 206px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;

// Styled container for text and button
const StyledTextButton = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  width: 248px;
  gap: 24px;
  flex: 1 0 0;
`;

// Styled component for the class description
const StyledClassDescription = styled.div`
  color: #666;
  font-family: Avenir, sans-serif;
  font-size: 18px;
  line-height: 1.2;
`;

export const ClassCard = ({ classData }) => {
  const bookNowButton = buttonData.find(
    (item) => item.buttonText === "Book Now"
  );

  return (
    <StyledClassCard>
      <StyledClassImage src={classData.imageId} alt={classData.className} />{" "}
      <StyledTextButton>
        <h3 style={{ fontWeight: "bold", fontSize: "20px", color: "#333" }}>
          {classData.className}
        </h3>

        <StyledClassDescription>{classData.description}</StyledClassDescription>

        {bookNowButton && (
          <div>
            <Buttons buttonList={[bookNowButton]} />
          </div>
        )}
      </StyledTextButton>
    </StyledClassCard>
  );
};
