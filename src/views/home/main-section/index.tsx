import { Header } from "@/components/layout/header";
import { myFont } from "@/pages/_app";
import { Container, Content, LeftSide, RightSide } from "./styles";
import balance from '../../../../public/imgs/backgrounds/main-section/balance.svg'



export function MainSection() {
  return (
    <Container>
      <Header />
      <Content>
        <LeftSide>

          <h1 className={myFont.className}>Lorem ipsum dolor sit amet, consecte tur adipiscing elit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          </p>
          <button>RESOLVA SEU PROBLEMA</button>
        </LeftSide>
        <RightSide>
          <figure>
            <img src={balance.src} alt="" />
          </figure>
        </RightSide>
      </Content>
    </Container>
  );
}
