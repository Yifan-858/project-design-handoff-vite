import styled from "styled-components";

// Styled button component
const StyledButton = styled.button`
  border-radius: 12px;
  background: #b3583b;
  color: #fff;
  font-family: Avenir, sans-serif;
  font-size: ${(props) => props.fontSize}px;
  font-weight: 500;
  padding: 8px 48px;
  margin: 0 auto 1rem;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background: #552a1c;
  }
`;

export const Buttons = ({ buttonText, fontSize }) => {
  return (
    <StyledButton onClick={() => console.log(buttonText)} fontSize={fontSize}>
      {buttonText}
    </StyledButton>
  );
};
