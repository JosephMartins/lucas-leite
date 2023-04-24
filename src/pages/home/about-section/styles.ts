import styled from "styled-components";
import { SPACING } from "../../../styles/theme/default";

export const Container = styled.div`
  z-index: 99999;
`;

export const Content = styled.div`
  background: #fff;
  max-width: 1440px;

  border-radius: 24px;
  padding: 0 4rem;
  margin: ${SPACING.SPACING_SECTION} auto 0 auto;

  position: relative;

  strong {
    color: #c49e12;
  }

  h1 {
    margin-top: 140px;
    font-weight: 400;
    font-size: 2.5rem;
    color: #736750;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #736750;
    font-weight: 300;
    line-height: 27px;
    max-width: 1160px;
  }

  @media (max-width: 900px) {
    padding: 0 2rem;
    margin: 143px auto 0 auto;
  }

  @media (max-width: 390px) {
    padding: 0 1rem;
  }
`;

export const ContentMap = styled.div`
  max-width: 1440px;
  margin: 196px auto 133px auto;
  display: flex;
  align-items: flex-end;
  padding: 0 4rem;
  gap: 60px;

  .map {
    grid-area: map;
    position: relative;
    width: 100%;
    overflow: hidden;
    max-width: 763px;
    height: 428px;

    .teste {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  gap: 3rem;

  @media (max-width: 920px) {
    padding: 0 2rem;
    margin: 186px auto 118px auto;

    .map {
      height: 232px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    margin: 133px auto 76px auto;

    .map {
      height: 232px;
    }

    .title {
      font-size: 2rem;
    }

    .button {
      button {
        width: 100%;
        height: 58px;
        font-size: 14px;
      }
    }
  }


 

  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }

  @media (max-width: 700px) {
    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }
  }
`;

export const WrapInfo = styled.div`
  max-width: 490px;
  width: 100%;

  .title {
    font-size: 4rem;
    color: #736750;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  @media (max-width: 720px) {
    .title {
      font-size: 2.5rem;
      max-width: 100%;
    }
  }

`;

export const MapWrap = styled.div`
  width: 100%;
  height: 428px;

  .teste {
    height: 428px;
  }
`;
