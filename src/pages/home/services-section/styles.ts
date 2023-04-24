import styled from "styled-components";
import { SPACING } from "../../../styles/theme/default";

export const Container = styled.div`
  z-index: 99999;
`;

export const Content = styled.div`
  padding: 0 4rem;
  max-width: 1440px;

  display: flex;
  gap: 97px;

  border-radius: 24px;
  position: relative;

  margin: ${SPACING.SPACING_SECTION} auto 0 auto;

  @media (max-width: 920px) {
    flex-direction: column;
    padding: 13px 2rem;

  margin: 143px auto 0 auto;

  }

  @media (max-width: 390px) {
    padding: 13px 1rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 609px;
  width: 100%;

  @media (max-width: 920px) {
    max-width: 100%;
  }

`;

export const WrapperInfo = styled.div`
  strong {
    color: #c49e12;
  }

  h1 {
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: #736750;
  }

  ul {
    li {
      color: #fff;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 27px;
    color: #736750;
    font-weight: 300;
    line-height: 27px;

    max-width: 513px;
  }

  @media (max-width: 920px) {
    p{
    max-width: 100%;

    }

  }

  p:nth-of-type(1){
    margin-bottom: 2rem;
  }



  .splide__pagination--ttb {
    right: auto;
    left: -0.5em;
  }
  
`;
