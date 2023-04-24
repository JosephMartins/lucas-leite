import styled from 'styled-components'

interface ContainerProps  {
  minWidth?: string;
}

export const Container = styled.button<ContainerProps>`
  min-width: ${props => props.minWidth || '358px'};
  background: #B28C00;
  height: 58px;
  color: #fff;
  font-weight: 700;
  transition: .2s;
  border-radius: 100px;
  font-size: 1rem;
  border: 0;

  &:hover{
    background: #C49112;
  }

`;