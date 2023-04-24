import styled from "styled-components";
import { SPACING } from "../../../styles/theme/default";

export const Container = styled.section``;

export const Content = styled.div`
  display: flex;
  gap: 132px;
  width: 100%;
  max-width: 1440px;
  padding: 0 4rem;
  margin: ${SPACING.SPACING_SECTION} auto 0 auto;

  @media (max-width: 1220px) {
    gap: 3rem;
  }

  @media (max-width: 920px) {
    flex-direction: column-reverse;
    padding: 0 2rem;
    margin: 143px auto 0 auto;
    gap: 0;
  }

  @media (max-width: 390px) {
    flex-direction: column-reverse;
    padding: 0 1rem;
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 588px;
  width: 100%;

  a {
    display: none;
    text-decoration: none;
  }

  @media (max-width: 920px) {
    align-items: center;
    margin: 0 auto;
    width: 100%;

    a {
      display: table;
      margin: 56px auto 0 auto;

      button {
        margin: 0;
      }
    }
  }
`;

export const InfoCard = styled.div`
  background: #736750;
  width: 100%;
  max-width: 597px;

  padding: 33px 22px;
  border-radius: 16px;

  display: flex;
  align-items: center;

  gap: 36px;
  height: 155px;

  ul {
    position: relative;

    li {
      color: #fff;
      font-size: 1rem;
      font-weight: 300;
      line-height: 21.79px;

      strong {
        display: none;
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 2px;
      background: #fff;
      height: 100px;
      left: -18px;
      top: 50%;
      transform: translateY(-50%);

      @media (max-width: 520px) {
        left: -16px;
      }
    }
  }

  @media (max-width: 520px) {
    padding: 1rem 0 1rem 1rem;

    ul {
      li {
        font-size: 10px;
        margin-left: 0.6rem;
        line-height: 14px;
        list-style: disc;
        strong {
          display: table;
          font-size: 18px;
          margin-left: -0.6rem;
          margin-bottom: 6px;
        }
      }
    }
  }
`;
export const PersonAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 93px;
    height: 93px;
  }

  strong {
    font-weight: 400;
    color: #fff;
    max-width: 84px;
    line-height: 25px;
    font-size: 1.125rem;
  }

  @media (max-width: 520px) {
    strong {
      display: none;
    }

    img {
      width: 93px;
      height: 93px;
    }
  }
`;

export const AboutCard = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 1rem;

  position: relative;

  h1 {
    font-weight: 400;
    color: #736750;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 8.125rem;
    color: #736750;
    font-weight: 300;
    line-height: 27px;

    max-width: 513px;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 920px) {
    a {
      display: none;
    }

    p {
      max-width: 100%;
      margin-bottom: 55px;
    }
  }
`;
