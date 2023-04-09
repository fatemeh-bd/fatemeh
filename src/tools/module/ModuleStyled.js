import styled from "styled-components";
import { startMobileWidth } from "../../variable";
export const ModuleStyle = styled.div`
  .moduleContainer {
    background-color: #000000ba;
  }
  .module {
    animation: popupAnimation 0.6s linear;
    .moduleheader {
      border-bottom: var(--mainBorder);
      color: var(--darkPen);
      .headerText {
        h5 {
          color: var(--whitePen);
        }
      }
      > div svg {
        width: 20px;
        height: 20px;
        margin: 0 0.2rem;
      }
      > svg {
        position: absolute;
        top: 0.7rem;
        left: 0;
        color: var(--mainColor);
        cursor: pointer;
      }
    }
  }

  .module,
  .closeModule {
    background-color: var(--darkGray);
    text-align: initial;
    color: var(--whitePen);
    overflow: auto;

  }

  .closeModule {
    transform: translateY(101vh);
    transition-duration: 0.6s;
    transition-timing-function: linear;
    opacity: 0;
  }
  @keyframes popupAnimation {
    from {
      transform: translateY(101vh);
    }

    to {
      transform: none;
    }
  }
  @media (max-width: ${startMobileWidth}) {
    .module,
  .closeModule {
 bottom: 2rem;}
  }

  @media (min-width: 720px) {
    .headerText {
      font-size: var(--font-md) !important;
    }
    .module,
    .closeModule {
      width: 700px;
      top: 0;
      margin: auto;
      border-radius: 20px;
      height: fit-content;
      max-height: 95vh;
    }
    .closeModule {
      position: fixed;
    }
    .module button {
      margin: 0.8rem auto;
    }
  }
`;
