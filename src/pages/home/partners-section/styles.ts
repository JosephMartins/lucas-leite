import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto 50px auto;
  padding: 0 4rem;

  @media (max-width: 920px) {
    flex-direction: column-reverse;
    padding: 0 2rem;
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

    button {
      background: #b38c00;
      border-radius: 100px;
      padding: 13px;
      color: #fff;
      font-weight: 700;
      font-size: 1rem;
      line-height: 22px;
      max-width: 350px;
      width: 100%;
      text-align: center;
      margin-top: 6rem;
      display: table;
      border: 0;
      transition: 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
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
  padding: 2rem 1.5rem;
  border-radius: 16px;

  display: flex;
  align-items: center;

  gap: 2rem;

  ul {
    position: relative;

    li {
      color: #fff;
      line-height: 22px;

      strong {
        display: none;
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 2px;
      background: #fff;
      left: -25px;
      height: 90px;
      top: 50%;
      transform: translateY(-50%);

      @media (max-width: 520px) {
        left: -16px;
      }
    }
  }

  @media (max-width: 520px) {
    padding: 1rem;

    ul {
      li {
        font-size: 10px;
        margin-left: 0.6rem;

        strong {
          display: table;
          font-size: 18px;
          margin-left: -0.6rem;
        }
      }
    }
  }
`;
export const PersonAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  strong {
    font-weight: 400;
    color: #fff;
    max-width: 80px;
    line-height: 25px;
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
  border-radius: 16px;

  position: relative;

  h1 {
    margin-top: 12px;
    font-weight: 400;
    color: #736750;
    margin-bottom: 5rem;
    font-size: 40px;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #736750;
    font-weight: 300;
    line-height: 22px;
  }

  a {
    text-decoration: none;

    button {
      background: #b38c00;
      border-radius: 100px;
      padding: 13px;
      color: #fff;
      font-weight: 700;
      font-size: 1rem;
      line-height: 22px;
      width: 350px;
      text-align: center;
      margin-top: 6rem;
      display: table;
      border: 0;
      transition: 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media (max-width: 920px) {
    h1 {
      margin-top: 142px;
    }

    a {
      display: none;
    }
  }
`;
