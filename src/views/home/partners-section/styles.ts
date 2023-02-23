import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 1130px;
  margin: 0 auto 50px auto;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 438px;
  width: 100%;
`;
export const InfoCard = styled.div`
  background: #fff;
  width: 100%;
  padding: 2rem 1.5rem;
  box-shadow: -13px 13px 8px -8px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  display: flex;
  align-items: center;

  gap: 3rem;

  ul{
    position: relative;

    &::after{
      content: '';
      position: absolute;
      width: 2px;
      background: #C49E12;
      left: -25px;
      height: 90px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
export const PersonAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  strong {
    font-weight: 400;
  }
`;
export const AboutCard = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 16px;
  padding: 90px;

  position: relative;

  strong {
    color: #c49e12;
  }

  h1 {
    margin-top: 12px;
    font-weight: 300;

    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: #000;
    font-weight: 300;
    line-height: 22px;
    max-width: 450px;;
  }

  span {
    position: absolute;
    bottom: 99px;
    right: 0;
    background: #687f9e;
    padding: 13px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    border-radius: 4px 0 0 4px;
    width: 350px;
    text-align: end;
  }
`;
