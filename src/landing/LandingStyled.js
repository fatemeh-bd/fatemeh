import styled from "styled-components";
import { startMobileWidth } from "../variable";
export const LandingStyle = styled.main`
  /* display: flex;
  align-items: center;
  justify-content: center;
  position: relative; */
  height: 100vh;
  overflow: auto;
  overflow-x: hidden;

  video {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    opacity: var(--lowOpacity);
  }
  .socials a {
    margin: 0 0.3rem;
    border: var(--mainBorder);
    border-radius: 50%;
    width: 40px;
    height: 40px;
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
  .content {
    .info  span,
    .introText span {
      color: var(--mainColor);
    }

    .introText {
      color: var(--whitePen);

      letter-spacing: -0.2px;
      line-height: 90px;
      margin-bottom: 43px;
      font-weight: 300;
    }
    .roundText {
      width: fit-content;
      margin: var(--leftAuto);
      border-radius: 50%;
      border: var(--mainBorder);
      position: relative;
      overflow: hidden;
      margin-top: ${({ lang }) => (lang === "fa" ? "5rem" : "1rem")};

      padding: 0.9rem;
      img {
        animation: rotating 6s infinite linear;
      }
      svg {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 30px;
        height: 30px;
        color: var(--whitePen);
      }
    }
  }
  .navigation {
    background-color: var(--darkColor);
    color: var(--grayPen);

    p {
      text-align: end;
      width: max-content;
    }
    > div {
      margin: 0.8rem 0;
    }
    .active {
      svg {
        color: var(--mainColor);
      }
    }
    svg {
      cursor: pointer;
      :hover {
        color: var(--mainColor);
      }
    }
  }
  @media (min-width: ${startMobileWidth}) {
    .navigation {
      top: 50%;
      transform: translateY(-50%);
    }
    .setting {
      transform: translateY(-2.4rem);
    }
  }
  @media (max-width: ${startMobileWidth}) {
    margin-bottom: 4rem;
    height: 90vh;

    .navigation {
      border-radius: 20px 20px 0 0;
      border-bottom: none;
      background-color: transparent;
      z-index: 90;
      backdrop-filter: blur(12px);
      width: 100%;
      padding: 0 2rem 0.8rem;
      > div {
        margin-bottom: 0;
      }
    }
    .content {
      .introText {
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        line-height: 60px;
      }
    }
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .letter {
    transition: ease-out 1s;
    transform: translateY(0%);
    color: var(--mainColor);
    &:hover {
      transform: translateY(-50%);
    }
  }
`;
