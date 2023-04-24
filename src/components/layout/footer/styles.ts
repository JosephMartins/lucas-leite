import styled from "styled-components";
import backgroundMainSection from "../../../assets/imgs/backgrounds/footer/bgfooter.svg";
import bgFooter from "../../../assets/imgs/backgrounds/footer/bg.svg";

export const Container = styled.div`
  background-color: #cac0a7;

  background-image: url(${bgFooter});
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 170px;

  width: 100%;
  max-width: 1440px;
  min-height: 410px;
  padding: 0 4rem;
  margin: 0 auto;

  figure {
    img {
      max-width: 250px;
      width: 100%;
      height: auto;
    }
  }

  ul {
    color: #736750;
    text-align: right;

    li {
      margin-bottom: 0.875rem;
      font-size: 1.25rem;
      font-weight: 300;
    }
  }

  @media (max-width: 900px) {
    gap: 3rem;
    height: auto;
    padding: 3rem 2rem;
  }

  @media (max-width: 600px) {
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    ul {
      text-align: center;
    }
  }
`;

export const WrapBackground = styled.div`
  background-image: url(${backgroundMainSection});
  background-color: #4d5466;
  background-size: cover;
  background-position: 1% 85%;
  background-repeat: no-repeat;
  height: 290px;
  width: 100%;
`;
