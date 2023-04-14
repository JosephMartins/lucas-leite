import styled from "styled-components";

import grafism from "../../../assets/imgs/backgrounds/footer/bg.svg";
import grafismSideRightBg from "../../../assets/imgs/backgrounds/main-section/grafism.svg";

export const Container = styled.div`
  background-image: url(${grafism});
  background-color: #cac0a7;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  min-height: 100vh;

  @media (max-width: 920px) {
    min-height: fit-content;
  }
`;

export const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 40%;
  gap: 1rem;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    min-height: fit-content;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  padding: 0 77px;

  h1 {
    font-weight: 200;
    font-size: 42px;
    line-height: 40px;
    color: #fff;
    margin-bottom: 2.375rem;
  }

  p {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 6rem;
    line-height: 27px;
  }

  button.contato {
    background: #b28c00;
    color: #fff;
    text-transform: uppercase;
    max-width: 358px;
    width: 100%;
    height: 42px;
    border: 0;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1rem;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 1180px) {
    padding: 1rem;
  }
 

  @media (max-width: 920px) {
    h1,
    p {
      text-align: center;
    }

   

    button.contato {
      display: table;
      margin: 0 auto;
    }
  }

  @media (max-width: 390px) {
    padding: 1rem;

    h1 {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }

    p{
      font-size: 1rem;
      margin-bottom: 80px;
    }

    padding: 14px;
  }
`;

export const MainContent = styled.div`
  padding: 148px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  a {
    text-decoration: none;
  }
`;

export const RightSide = styled.div`
  background-color: #969696;
  background-image: url(${grafismSideRightBg});
  background-repeat: no-repeat;
  background-position: 30% 20%;

  display: flex;
  align-items: center;
`;

export const ContentSlide = styled.div`
  width: 100%;

  .splide__track {
    margin-bottom: 12rem;
  }

  .splide__pagination li {
    button {
      width: 31px;
      height: 31px;
      border-radius: 50%;
    }
  }
  .splide__pagination {
    gap: 12px;
    margin-top: 1rem;
  }

  .splide__pagination__page {
    &:hover {
      background: #cac0a7 !important;
    }
  }
  .splide__pagination__page.is-active {
    transform: initial !important;
    background: #cac0a7;
  }

  @media (max-width: 920px) {
    .splide__pagination li {
      button {
        width: 14px;
        height: 14px;
        border-radius: 50%;
      }
    }

    .splide{
      max-width: 100% !important;
    }

    .splide__pagination {
      gap: 0;
      margin-top: 1rem;
    }

    .splide__track {
      margin-bottom: 2.5rem;
    }
  }
`;

export const SlideWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
  }

  h1 {
    color: #fff;
    font-family: none;
    font-weight: 200;
    margin: 1rem 0 0 0;
    font-size: 4rem;
  }

  p {
    color: #fff;
    font-size: 1.375rem;
    font-family: none;
    font-weight: 200;
  }

  @media (max-width: 920px) {
    img {
      max-width: 228px;
    }
  }
`;
