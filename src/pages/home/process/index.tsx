import React from "react";
import {
  Container,
  Content,
  WrapperCard,
  InfoCard,
  AboutCard,
  WrapperInfo,
  BoxImageInfo,
} from "./styles";
import hands from "../../../assets/imgs/backgrounds/process-section/hands.png";
import { ImCheckmark2 } from "react-icons/im";
import { AiOutlineFile } from "react-icons/ai";
import { BsChatRight } from "react-icons/bs";

export function Process() {
  return (
    <Container id="etapa">
      <Content>
        <AboutCard>
          <WrapperInfo>
            <strong>Etapas essencias</strong>

            <h1>PROCESSO</h1>

            <BoxImageInfo>
              <img src={hands} alt="logo lucas leite"  />

              <p>
                Nosso processo de atendimento jurídico é desenvolvido para
                garantir a máxima eficiência e satisfação de nossos clientes.
                Tudo começa com uma avaliação minuciosa de sua situação, seguida
                de uma estratégia personalizada para atender às suas
                necessidades.
              </p>
            </BoxImageInfo>

            <p >
              Trabalhamos com uma abordagem integrada, utilizando ferramentas
              tecnológicas avançadas e processos de trabalho eficientes para
              garantir resultados rápidos e satisfatórios.
            </p>
          </WrapperInfo>

          <WrapperCard>
            <InfoCard>
              <BsChatRight /> Contato inicial
            </InfoCard>
            <InfoCard>
              <AiOutlineFile /> Avaliação
            </InfoCard>
            <InfoCard>
              <ImCheckmark2 /> Estratégia jurídica
            </InfoCard>
          </WrapperCard>
        </AboutCard>
      </Content>
    </Container>
  );
}
