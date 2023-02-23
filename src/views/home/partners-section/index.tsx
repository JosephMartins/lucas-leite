import React from "react";
import {
  Container,
  Content,
  WrapperCard,
  InfoCard,
  PersonAvatar,
  AboutCard,
} from "./styles";

import adv1 from "../../../../public/imgs/backgrounds/about-section/adv1.png";
import adv2 from "../../../../public/imgs/backgrounds/about-section/adv2.png";
import adv3 from "../../../../public/imgs/backgrounds/about-section/adv3.png";
import Image from "next/image";

export function PartnersSection() {
  return (
    <Container>
      <Content>
        <WrapperCard>
          <InfoCard>
            <PersonAvatar>
              <Image src={adv1} alt="logo lucas leite" />

              <strong>Lucas Leite</strong>
            </PersonAvatar>

            <ul>
              <li>Direito Digital</li>
              <li>Direito Ambiental</li>
              <li>Direito Penal</li>
            </ul>
          </InfoCard>
          <InfoCard>
            <PersonAvatar>
              <Image src={adv2} alt="logo lucas leite" />

              <strong>Lucas Leite</strong>
            </PersonAvatar>

            <ul>
              <li>Direito Digital</li>
              <li>Direito Ambiental</li>
              <li>Direito Penal</li>
            </ul>
          </InfoCard>
          <InfoCard>
            <PersonAvatar>
              <Image src={adv3} alt="logo lucas leite" />

              <strong>Lucas Leite</strong>
            </PersonAvatar>

            <ul>
              <li>Direito Digital</li>
              <li>Direito Ambiental</li>
              <li>Direito Penal</li>
            </ul>
          </InfoCard>
        </WrapperCard>

        <AboutCard>
          <strong>Conheça nossos especialistas</strong>

          <h1>PARCEIROS</h1>

          <p>
            Nossa equipe de advogados altamente capacitados está sempre pronta
            para orientar e conduzir o processo de maneira eficiente, com
            atenção aos detalhes e comunicação clara e objetiva.
          </p>

          <span>RESOLVA SEU PROBLEMA</span>
        </AboutCard>
      </Content>
    </Container>
  );
}
