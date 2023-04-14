import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  width: 100%;
  max-width: 1130px;
  margin: 0 auto 50px auto;
  position: relative;
`;

export const AboutCard = styled.div`
  flex: 1;
  border-radius: 16px;
  padding: 90px;
  max-width: 900px;
  width: 100%;
  background: #fff;

  display: flex;

  @media (max-width: 1180px) {
    flex-direction: column;
    padding: 3rem 2rem;
  max-width: 100%;

  }
`;

export const WrapperInfo = styled.div`
  strong {
    color: #c49e12;
  }

  h1 {
    margin-top: 12px;
    font-weight: 300;

    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #000;
    font-weight: 300;
    line-height: 22px;
    max-width: 550px;
  }

  @media(max-width: 1180px){
    
    p{
      max-width: 100% ;
      width: 100%;
    }
  }
`;

export const BoxImageInfo = styled.div`
  display: flex;
  gap: 1rem;

  p {
    max-width: 200px;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
  }

  @media(max-width: 1180px){
    flex-direction: column;
    
    p{
      max-width: 100% ;
      width: 100%;
    }
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 438px;
  width: 100%;

  position: absolute;
  right: 0;
  top: 50px;

  @media (max-width: 1180px) {
    position: relative;
    flex-direction: row;
    overflow: auto;
    max-width: 100%;
    top: 0;
    padding: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const InfoCard = styled.div`
  width: 100%;
  padding: 52px;
  background: #f5f5f5;
  box-shadow: -13px 13px 8px -8px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: flex;
  align-items: center;

  gap: 1rem;
  max-width: 438px;
  height: 156px;
  color: #4d5466;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  svg {
    font-size: 2.5rem;
  }

  @media (max-width: 1180px) {
    padding: 2rem;
    min-width: 300px;
    height: 90px;
  }
`;
