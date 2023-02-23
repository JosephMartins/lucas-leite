import { Container, Content } from "./styles";

import logoPng from '../../../../public/imgs/logo/logo.svg'
import Image from "next/image";

export  function Header() {
  return (
    <Container>
      <Content>
        <figure>
          <Image src={logoPng} alt="logo lucas leite" />
        </figure>

        <ul>
          <li>Serviços</li>
          <li>Etapas</li>
          <li>Parceiros</li>
          <li>Sobre Nós</li>
        </ul>

        <button>Contato</button>
      </Content>
    </Container>
  )
}
