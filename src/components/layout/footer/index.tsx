import React from "react";
import { Container, Content, WrapBackground } from "./styles";
import logoPng from '../../../../public/imgs/logo/logo-footer.svg'
import Image from "next/image";

export function Footer() {
  return (
    <Container>
      <WrapBackground />


      <Content>
        <figure>
          <Image src={logoPng} alt="logo lucas leite" />
        </figure>

        <ul>
          <li>E-mail: teste@gmail.com</li>
          <li>Telefone: 3030-0972</li>
          <li>Endereço: Q 302, Asa Norte, Bloco B</li>
        </ul>
        <ul>
          <li> Abra com Waze </li>
          <li>Abra com Google Maps</li>
        </ul>
      </Content>
    </Container>
  );
}
