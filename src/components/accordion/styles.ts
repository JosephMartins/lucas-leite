import styled, { css } from "styled-components";

interface BodyAccordionProps {
  showBody: boolean;
}

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #736750;
  border-radius: 30px;
  margin-bottom: 1rem;
  display: ${(props) => (props.show ? "block" : "none")};

  
`;

export const HeaderAccordion = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  gap: 1.125rem;
  height: 78px;
  padding: 0 2rem;
  border-radius: 30px;
  border: 1px solid transparent;
  transition: .6s;

  span {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: #fff;
    font-size: 1.25rem;

    img{
      width: 46px;
height: 46px;
    }

    strong {
      font-weight: 400;
      color: #fff;
    }
  }

  @media (max-width: 900px) {
    span {
      font-size: 0.875rem;
      gap: 8px;
    }

    span:first-child {
    }
  }

  &.active:hover {
    background: #736750;

    span {
      color: #fff;

      img{
        filter: initial;


      }

      strong {
        color: #fff;
      }
    }
  }

  &:hover {
    background: #fff;
    border: 1px solid #736750;

    span {
      color: #736750;

      img{
        filter: invert(39%) sepia(4%) saturate(3921%) hue-rotate(1deg) brightness(89%) contrast(61%);


      }

      strong {
        color: #736750;
      }
    }
  }
`;
export const BodyAccordion = styled.div<BodyAccordionProps>`
  overflow: hidden;
  transition: 0.6s;
  max-height: 0;
  padding: 0 2.625rem 0 2rem;

  ${(props) =>
    props.showBody &&
    css`
      max-height: 700px;
    `}

  p {
    color: #fff;
    margin: 1rem 0 1rem 0;
    font-size: 17px;
  }

  ul {
    color: #fff;
    margin-bottom: 2rem;
    margin-left: 1.5rem;
    list-style: disc !important;
    font-size: 17px;
  }

  strong {
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: table;
    font-weight: 300;
  }

  button {
    margin-left: auto;
    display: table;
    border-radius: 100px;
    height: 48px;
    margin-bottom: 3.375rem;
    text-transform: uppercase;
  }
`;
