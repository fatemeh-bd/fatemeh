import styled from "styled-components";
export const MainButtonStyle = styled.button`
  border: 2px solid var(--mainColor);
  background-color: var(--mainColor);
  border-radius: var(--md-radius);
  color:#1f1f1f;
  font-weight: bold;
  :hover{
  background-color: transparent;
  color: var(--mainColor);

  svg {
    path {
      stroke: var(--mainColor);
    }
  }
  }
  svg {
    margin: 0 0.5rem;
    /* path {
      stroke: var(--darkColor);
    } */
  }
`;
