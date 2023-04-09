import styled from "styled-components";
export const MainBox = styled.div`
  padding: 0.4rem 1rem;
  border: var(--mainBorder);
  border-radius: var(--md-radius);
  font-size: var(--font-sm);
  color: var(--whitePen);
  width: fit-content;
  ${({ hover }) => hover && ":hover{border-color:var(--mainColor)}"};
`;
