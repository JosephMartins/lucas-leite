import styled from "styled-components";

export const Container = styled.div`
  background: #454c5c;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1130px;
  height: 102px;

  margin: 0 auto;

  button {
    background-color: #c49e12;
    color: #fff;
    text-transform: uppercase;
    max-width: 208px;
    width: 100%;
    height: 42px;
    border: 0;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    li {
      color: #fff;
      width: 92px;
      height: 102px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: 0.2s;

      &:hover {
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          border-bottom: 4px solid #c49e12;
        }
      }
    }
  }
`;
