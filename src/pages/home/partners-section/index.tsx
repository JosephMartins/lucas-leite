import adv1 from "../../../assets/imgs/backgrounds/partners-section/araujo.svg";
import adv2 from "../../../assets/imgs/backgrounds/partners-section/meireles.svg";
import adv3 from "../../../assets/imgs/backgrounds/partners-section/carlos.svg";

import {
  Container,
  Content,
  WrapperCard,
  InfoCard,
  PersonAvatar,
  AboutCard,
} from "./styles";

export function PartnersSection() {
  return (
    <Container id="PARCEIROS">
      <Content>
        <WrapperCard>
          <InfoCard>
            <PersonAvatar>
              <img src={adv1} alt="logo lucas leite" />

              <strong>Araújo e Diniz</strong>
            </PersonAvatar>

            <ul>
            
              <li><strong>Araújo e Diniz</strong></li>
              <li>Direito Empresarial</li>
              <li>Direito Tributário</li>
              <li>Direito Previdenciário</li>
              <li>Direito do Trabalho</li>
              <li>Direito Administrativo e Direito Desportivo</li>
            </ul>
          </InfoCard>
          <InfoCard>
            <PersonAvatar>
              <img src={adv2} alt="logo lucas leite" />

              <strong>Meireles e Birenbaum</strong>
            </PersonAvatar>

            <ul>
              <li><strong>Meireles e Birenbaum</strong></li>
              <li>Inteligência Jurídica e Contábil</li>
              <li>Direito Empresarial </li>
              <li>Direito do Consumidor </li>
              <li>Responsabilidade Civil e Contratual</li>
            </ul>
          </InfoCard>
          <InfoCard>
            <PersonAvatar>
              <img src={adv3} alt="logo lucas leite" />

              <strong>Carlos Brandão</strong>
            </PersonAvatar>

            <ul>
              <li><strong>Carlos Brandão</strong></li>
              <li>Direito da família e Sucessões</li>
              <li>Planejamento Sucessório</li>
            </ul>
          </InfoCard>


          <a href="https://wa.me/5561999719217?text=Ol%C3%A1%2C+vim+pelo+site%21+Gostaria+de+falar+com+um+advogado+especialista" target="_blank">
            <button>QUERO FALAR COM UM ESPECIALISTA</button>
          </a>
        </WrapperCard>

        <AboutCard>

          <h1>PARCEIROS</h1>

          <p>
          Nossa equipe de advogados altamente capacitados está sempre pronta para orientar e conduzir o processo de maneira eficiente, objetiva e respeitando a subjetividade de cada cliente.
          </p>

          <a href="https://wa.me/5561999719217?text=Ol%C3%A1%2C+vim+pelo+site%21+Gostaria+de+falar+com+um+advogado+especialista" target="_blank">
            <button>QUERO FALAR COM UM ESPECIALISTA</button>
          </a>
        </AboutCard>
      </Content>
    </Container>
  );
}
