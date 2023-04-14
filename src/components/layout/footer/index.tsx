import React from "react";
import { Container, Content, WrapBackground } from "./styles";
import logoPng from '../../../assets/imgs/logo/logo-marrom.svg'

export function Footer() {
  return (
    <Container>


      <Content>
        <figure>
          <img src={logoPng} alt="logo lucas leite" />
        </figure>

        <ul>
          <li>(61) 9 9971-9217</li>
          <li>@lucasleite.sia</li>
          <li>lucasleiteferreira.adv@gmail.com</li>
          <li>CLN 407, BL. B, L.09, ASA NORTE, BRASÍLIA/DF</li>
        </ul>
      </Content>
    </Container>
  );
}
