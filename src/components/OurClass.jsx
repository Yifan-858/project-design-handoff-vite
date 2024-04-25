import styled from "styled-components";
import classData from "../data/Class.json";
import { ClassCard } from "./ClassCard";


// Parent container for the "Our Classes" section
const StyledClassesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 56px 40px;
  padding: 20px;
  width: 100%;
`;

export const OurClass = () => {


  return (
    <StyledClassesContainer>
      <ClassCard />
    </StyledClassesContainer>
    // <StyledClassesContainer>
    //   {classData.map((item, index) => (
    //     <div key={index} style={{ position: "relative" }}>
    //       <ClassCard classData={item} />
    //     </div>
    //   ))}
    // </StyledClassesContainer>
  );
};

// import styled from "styled-components";
// import classData from "../data/Class.json"; // Example data source
// import { ClassCard } from "./ClassCard";

// // Parent container for the "Our Classes" section
// const StyledClassesContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   align-items: flex-start;
//   gap: 56px 40px;
//   padding: 20px;
//   width: 100%;
// `;

// export const OurClass = () => {
//   // Example class data
//   const classes = [
//     {
//       image: "/class01.png",
//       name: "The Reformer",
//       description: "Challenges core strength, stability, and balance.",
//       buttonLabel: "Book Now",
//     },
//     {
//       image: "/class02.png",
//       name: "Get on the Mat",
//       description:
//         "Learn the fundamentals at your own pace. A great place to start your pilates journey.",
//       buttonLabel: "Book Now",
//     },
//     {
//       image: "/class03.png",
//       name: "Pre and Postnatal",
//       description:
//         "Gentle exercises to maintain strength, flexibility, and promote relaxation.",
//       buttonLabel: "Book Now",
//     },
//     {
//       image: "/class04.png",
//       name: "On Demand",
//       description:
//         "Workout wherever, whenever. Live classes online and over 100 pre-recorded sessions.",
//       buttonLabel: "Book Now",
//     },
//   ];

//   return (
//     <StyledClassesContainer>
//       {classes.map((classItem, index) => (
//         <ClassCard key={index} {...classItem} />
//       ))}
//     </StyledClassesContainer>
//   );
// };
