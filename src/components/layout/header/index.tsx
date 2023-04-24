import {  Container, Content,  Wrapper } from "./styles";

import { useRef, useState } from "react";
import { useOutSideClick } from "../../../hooks/useOutSideClick";
import iconMenu from '../../../assets/imgs/icons/menu.svg'

export function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const wrapperRef = useRef(null);

  function handleShowMenu() {
    setToggleMenu(true);
  }

  function handleCloseMenu() {
    setToggleMenu(false);
  }
  useOutSideClick(wrapperRef, handleCloseMenu);

  return (
    <Container>
      <Content>
        <button onClick={handleShowMenu}>
          <img src={iconMenu} alt="Icon menu" />
        </button>

       

        <Wrapper show={toggleMenu} ref={wrapperRef} className={toggleMenu ? 'show' : ''}>
        <button  onClick={handleCloseMenu}>
        <span>X</span>
        </button>
           <ul>
            <li><a href="#SERVICOS">SERVIÇOS</a></li>
            <li><a href="#PARCEIROS">PARCEIROS</a></li>
            <li><a href="#SOBRE">SOBRE NÓS</a></li>
           </ul>
        </Wrapper>
      </Content>
    </Container>
  );
}
