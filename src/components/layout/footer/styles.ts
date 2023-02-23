import styled from 'styled-components'
import   backgroundMainSection  from '../../../../public/imgs/backgrounds/footer/bgfooter.svg'

export const Container = styled.div`
  background-color: #4D5466;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Content  = styled.div`
  display: flex;
  align-items: center;
  gap: 170px;
  max-width: 1130px;
  height: 310px;
  margin: 0 auto;

  ul{
    color: #fff;
    li{
      margin-bottom: 1rem;
    }
  }
`;

export const WrapBackground = styled.div`
   background-image: url(${backgroundMainSection.src});
  background-color: #4d5466;
  background-size: cover;
  background-position: 1% 85%;
  background-repeat: no-repeat;
  height: 290px;
  width: 100%;

`