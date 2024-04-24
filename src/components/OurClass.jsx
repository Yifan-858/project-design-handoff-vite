import styled from "styled-components";
import classData from "../data/Class.json";
import { ClassCard } from "./ClassCard";


// Parent container for the "Our Classes" section
const StyledClassesContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap; 
  align-items: flex-start; 
  width: 100%; 
  gap: 56px 40px; 
  padding: 20px; 
`;

export const OurClass = () => {


  return (
    <StyledClassesContainer>
      {classData.map((item, index) => (
        <div key={index} style={{ position: "relative" }}>
          <ClassCard classData={item} />
        </div>
      ))}
    </StyledClassesContainer>
  );
};
