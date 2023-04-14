import styled from "styled-components";

export const Container = styled.div`
  z-index: 99999;
`;

export const Content = styled.div`
  padding: 90px 4rem;
  max-width: 1440px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  border-radius: 24px;
  position: relative;

  margin: 0 auto;


  @media (max-width: 920px) {
     grid-template-columns: 1fr;
     padding: 13px 2rem;

  }

  @media (max-width: 390px) {
     grid-template-columns: 1fr;
     padding: 13px 1rem;
  }
 
`;

export const Wrapper = styled.div``;

export const WrapperInfo = styled.div`
   strong {
    color: #c49e12;
  }

  h1 {
    margin-top: 12px;
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: #736750;
  }

  ul{
    li{
      color: #fff;
    }
  }

  p {
    font-size: 1.25rem;
    
    margin-bottom: 2rem;
    line-height: 27px;
    color: #736750;
    font-weight: 300;
    line-height: 22px;
  }
  .splide__pagination--ttb {
    right: auto;
    left: -0.5em;
  }
  @media (max-width: 920px) {
    h1{
      margin-top: 120px;
    }
  }
 
`;