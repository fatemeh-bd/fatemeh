import styled from "styled-components";
export const SecondlyButtonStyle = styled.button`

  border-radius: var(--md-radius);
  transition: 250ms all ease-in-out;
  padding: 0 70px 0 35px;
  color: var(--whitePen);
  background-color: transparent;
  outline: none !important;
  border: 1px solid var(--mainColor);
  ::before {
    background-color: var(--mainColor);
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-out all;
  }
  :hover::before {
    transform: translateX(0);
  }
  svg {
    position: absolute;
    right: -1px;
    top: -1px;
    bottom: 0;
    width:48px;
    height: inherit;
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    border-radius: 50%;
    background-color: var(--mainColor);
  }
`;
