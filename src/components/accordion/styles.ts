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

  padding: 1.5rem 2rem;
  @media (max-width: 900px) {
    padding: 1rem;
  }
`;

export const HeaderAccordion = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  gap: 1rem;

  span {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: #fff;

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
`;
export const BodyAccordion = styled.div<BodyAccordionProps>`
  overflow: hidden;
  transition: 0.6s;
  max-height: 0;

  ${(props) =>
    props.showBody &&
    css`
      max-height: 500px;
    `}

  p {
    color: #fff;
    margin: 2rem 0 1rem 0;
  }

  ul{
    color: #fff;
    margin-bottom: 2rem;
    list-style: disc !important;
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

    background: #b28c00;

    color: #fff;
    text-transform: uppercase;
    height: 42px;
    border: 0;
    font-weight: 600;
    padding: 0 2rem;
    font-size: 1rem;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
