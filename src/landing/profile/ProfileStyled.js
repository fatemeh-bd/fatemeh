import styled from "styled-components";
import { startMobileWidth } from "../../variable";
export const ProfileStyle = styled.div`
  border: var(--mainBorder);
  border-radius: var(--md-radius);
  padding: 2rem 1.5rem;

  .info img {
    width: 230px;
    height: 190px;
    margin: auto;
    border-radius: var(--md-radius);
    object-fit: cover;
    z-index: -1;
    filter: grayscale(100%);
  }
  p {
    color: var(--whitePen);
  }

  .socials a {
    margin: 0 0.3rem;
    border: var(--mainBorder);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      border-color: var(--mainColor);
      svg path {
        stroke: var(--mainColor);
      }
    }
    svg {
      width: 16px;
      height: 16px;
    }
  }
  .setting {
    svg {
      cursor: pointer;
      background-color: var(--darkColor);
      padding: 0.4rem;
      border: var(--mainBorder);
      border-radius: 8px;
      margin: 0 0.4rem;
      :hover {
        border-color: var(--mainColor);
      }
    }
  }
  @media (min-width: ${startMobileWidth}) {
    /* min-height: 83vh; */
    height: fit-content;
  }
`;
