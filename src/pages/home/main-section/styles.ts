import styled from "styled-components";

import grafism from "../../../assets/imgs/backgrounds/footer/bg.svg";
import grafismSideRightBg from "../../../assets/imgs/backgrounds/main-section/grafism.svg";

export const Container = styled.div`
  background-image: url(${grafism});
  background-color: #cac0a7;
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
  grid-template-columns: 1fr 616px;
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
  padding: 0 102px 0 79px;

 

  p {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 6rem;
    line-height: 27px;
  }


  @media (max-width: 1180px) {
    padding: 1rem;
  }
 

 

`;

export const MainContent = styled.div`
  padding: 148px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  h1 {
    font-weight: 200;
    font-size: 42px;
    line-height: 40px;
    color: #fff;
    margin-bottom: 2.375rem;
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

  @media (max-width: 414px) {

    h1 {
      font-size: 2rem !important;
      margin-bottom: 2.5rem;
    }

    p{
      font-size: 1rem;
      margin-bottom: 80px;
    }
  }

  a {
    text-decoration: none;
    button{
      height: 48px;
    }
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
    max-width: 300px;
    width: 100%;
    height: auto;
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
