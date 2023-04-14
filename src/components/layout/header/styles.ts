import styled, { css } from "styled-components";

interface WrapperProps {
  show: boolean;
}

export const Container = styled.div`
  background: transparent;
  justify-self: baseline;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 1180px) {
    padding: 0;
  }

  @media (max-width: 390px) {
    transform: initial;
    left: 0;
    justify-content: flex-start;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 148px;
  margin: 0 auto;

  button {
    display: none;
    font-size: 2.5rem;
    font-weight: 700;
    color: #736750;
  }

  @media (max-width: 390px) {
    height: 70px;
    justify-content: flex-start;
    margin: 0;

    button {
      display: block;
      background: transparent;
      border: 0;
      margin: 1rem;
    }
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  position: relative;
  overflow: hidden;

  div {
    width: 100%;
  }

  .close {
    position: absolute;
  }

  ul {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 1.5rem;
    margin: 0 auto;

    @media (max-width: 920px) {
      gap: 0.6rem;
    }

    li {
      color: #736750;

      a {
        text-decoration: none;
        color: #736750;
        height: 102px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: 0.2s;
        cursor: pointer;

        @media (max-width: 920px) {
          border: 1px solid #736750;
          height: fit-content;
          height: 40px;
          display: flex;
          padding: 0 1rem;
          align-items: center;
          border-radius: 24px;

          &:hover {
            border-bottom: 4px solid #736750;
          }
        }
      }
    }
  }

  @media (max-width: 390px) {
    width: 0;

    &.show {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      height: 304px;
      max-width: 188px;
      width: 100%;
      z-index: 99999;
      box-shadow: 1px 1px 5px #b28c01a3;
      transition: 0.4s;

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0;

        li {
          width: 100%;

          a {
            margin: 0;
            border: 0;
            font-weight: 700;
            justify-content: flex-start;
          }
        }
      }
    }
  }
`;
