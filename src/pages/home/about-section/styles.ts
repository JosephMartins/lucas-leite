import styled from "styled-components";

export const Container = styled.div`
  z-index: 99999;
`;

export const Content = styled.div`
  background: #fff;
  max-width: 1440px;

  border-radius: 24px;
  padding: 0 4rem;

  margin: 0 auto;
  position: relative;

  strong {
    color: #c49e12;
  }

  h1 {
    margin-top: 140px;
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: #736750;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #736750;
    font-weight: 300;
    line-height: 22px;
  }

  @media (max-width: 900px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 390px) {
    padding: 3rem 1rem;
  }
`;

export const ContentMap = styled.div`
  max-width: 1440px;
  margin: 3rem auto;
  display: grid;
  padding: 0 4rem;

  .title {
    grid-area: title;
    font-size: 4rem;
    color: #736750;
    font-weight: 400;
  }

  .map {
    grid-area: map;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%;
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

  .button {
    grid-area: button;

    button {
      background: #b38c00;
      border-radius: 100px;
      width: 395px;
      height: 58px;
      border: 0;
      color: #f5f5f5;
      font-weight: 700;

      font-size: 1.2rem;
    }
  }
  grid-template: 2fr 1fr / 1fr 2fr;
  align-items: center;
  gap: 3rem;
  grid-template-areas:
    "title map"
    "button map";

  @media (max-width: 920px) {
    padding: 0 2rem;

    .map {
      max-width: 380px;
      height: 232px;
    }

    .title {
      font-size: 3.3rem;
    }

    .button {
      button {
        width: 270px;
        height: 58px;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 700px) {
    grid-template: 1fr / 1fr;
    padding: 0 1rem;

    .map {
      max-width: 358px;
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

    grid-template-areas:
      "title"
      "map"
      "button";
  }
`;
export const MapWrap = styled.div`
  width: 100%;
`;
