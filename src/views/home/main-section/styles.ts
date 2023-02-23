import styled from 'styled-components'

import   backgroundMainSection  from '../../../../public/imgs/backgrounds/main-section/bg-main-section.svg'

export const Container = styled.div`
  background-image: url(${backgroundMainSection.src});
  background-color: #4d5466;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const Content = styled.div`
  max-width: 1130px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  
`;

export const LeftSide = styled.div`
  h1{
    font-weight: 400;
    font-size: 42px;
    line-height: 40px;
    max-width: 400px;
    color: #fff;
    margin: 112px 0 2rem 0;
  }

  p{
    color: #fff;
    font-size: 1rem;
    margin-bottom: 3rem;
  }

  button{
    margin-bottom: 238px;

    background: #687F9E;
    color: #fff;
    text-transform: uppercase;
    max-width: 420px;
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
`
export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`