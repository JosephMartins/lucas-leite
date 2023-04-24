import React, { useState } from "react";

import { Container, Content, Wrapper, WrapperInfo } from "./styles";
import iconConsultoria from "../../../assets/imgs/icons/consultoria.svg";
import iconLup from "../../../assets/imgs/icons/lup.svg";
import iconJudi from "../../../assets/imgs/icons/judicial.svg";
import iconExtrajudicial from "../../../assets/imgs/icons/extrajudicial.svg";
import Accordion from "../../../components/accordion";
import { Button } from "../../../components/button";

export default function ServicesSection() {
  const [showAccordion, setShowAccordion] = useState<number | null>(null);

  function toggleShowAccordion(accordionNumber: number) {
    if (accordionNumber === showAccordion) {
      setShowAccordion(null);
    } else {
      setShowAccordion(accordionNumber);
    }
  }

  return (
    <Container id="SERVICOS">
      <Content>
        <WrapperInfo>
          <h1>SERVIÇOS</h1>
          <p>
            Com um processo de atendimento desenvolvido para garantir a máxima
            eficiência e eficácia aos nossos clientes, oferecemos soluções
            completas em serviços jurídicos, com atuação em diversas áreas do
            Direito. Para tanto, buscamos gerar um atendimento humanizado, que
            escute o cliente e o aproxime para um maior conforto diante do
            conflito que o cerca, apresentando uma avaliação minuciosa da
            particularidade do caso in concreto com uma abordagem mais objetiva
            e eficiente e tendo sempre em mente a subjetividade e a necessidade
            do cliente.
          </p>
          
          <p>
            Para tanto, trabalhamos de maneira integrada, usufruindo de
            ferramentas tecnológicas e sistemas de integração que visam garantir
            processos de trabalho eficientes e, por consequência, resultados
            rápidos e satisfatórios.
          </p>
        </WrapperInfo>

        <Wrapper>
          <Accordion
            iconHeader={iconLup}
            textHeader="DUE DILIGENCE"
            show={showAccordion !== 1 && showAccordion !== null ? false : true}
            onClick={() => toggleShowAccordion(1)}
          >
            <>
              <p>
                É a análise detalhada de toda a documentação e informação de um
                determinado imóvel e de seu vendedor, visando mapear eventuais
                contingências e passivos para maior segurança quanto aos riscos
                do negócio imobiliário, bem como prevenir eventuais litígios,
                possibilitando às partes obterem informações para melhor
                definição das suas obrigações, responsabilidades, condições,
                etc. No âmbito imobiliário, a Due Diligence deve ser realizada
                nos negócios em que discorra sobre a constituição de direitos,
                entre outros, tais como:
              </p>

              <ul>
                <li>
                  Compra e Venda de Imóveis p/fins residenciais ou comerciais;
                </li>
                <li>Locação de Imóveis p/fins residenciais ou comerciais;</li>
                <li>
                  Contratos de Direitos Reais de Garantias (Penhor, Hipoteca e
                  Anticrese);
                </li>
              </ul>
              <a
                href="https://wa.me/5561999719217?text=Ol%C3%A1%2C+vim+pelo+site%21+Quero+falar+sobre+DUE+DILIGENCE"
                target="_blank"
              >
                <Button minWidth="247px">Fale agora</Button>
              </a>
            </>
          </Accordion>
          <Accordion
            iconHeader={iconConsultoria}
            textHeader="CONSULTORIA/ ASSESSORIA"
            show={showAccordion !== 2 && showAccordion !== null ? false : true}
            onClick={() => toggleShowAccordion(2)}
          >
            <>
              <p>
                Com atendimento humanizado, buscamos apresentar as implicações
                legais dos atos, sugerir adequações contratuais para garantirmos
                a conformidade legal, encaminhar o devido ato cartorário, dentre
                outros, sempre com um olhar preventivo e visando evitar a
                judicialização das relações jurídicas para maior celeridade na
                solução dos conflitos. Ainda, trabalhamos com a elaboração e
                revisão de Contratos Imobiliários, tais como:
              </p>

              <ul>
                <li>Contrato de Compra e Venda;</li>
                <li>
                  Contrato de Promessa de Compra e Venda (com ou sem reserva de
                  locação);
                </li>
                <li>Contrato de Comodato;</li>
                <li>Contrato de Permuta</li>
                <li>Contrato de Locação Residencial;</li>
                <li>Contrato de Financiamento Imobiliário;</li>
                <li>Contrato Built to Suit</li>
                <li>Contrato de Corretagem Imobiliária;</li>
                <li>Contrato de Incorporação Imobiliária;</li>
                <li>Contrato de Arrendamento Rural;</li>
              </ul>
              <a
                href="https://wa.me/5561999719217?text=Ol%C3%A1%2C+vim+pelo+site%21+Quero+falar+sobre+CONSULTORIA%2F+ASSESSORIA"
                target="_blank"
              >
                <Button minWidth="247px">Fale agora</Button>
              </a>
            </>
          </Accordion>

          <Accordion
            iconHeader={iconExtrajudicial}
            textHeader="EXTRAJUDICIAL"
            show={showAccordion !== 3 && showAccordion !== null ? false : true}
            onClick={() => toggleShowAccordion(3)}
          >
            <>
              <p>
                Como a principal forma de atuação da Lucas Leite - Sociedade
                Individual de Advocacia, busca-se aplicar uma advocacia
                contrária aos processos conservadores e litigantes, seja por
                meio da realização de diligências e medidas administrativas e/ou
                cartorárias, para que o cliente consiga a garantia de seus
                direitos com celeridade, simplicidade e eficácia. Sempre
                buscando a resolução dos conflitos de forma alternativa, com
                foco no protagonismo das partes envolvidas e equilíbrio nas
                relações sociais e negociais. Dentre os diversos atos e medidas,
                realizamos também:
              </p>
              <ul>
                <li>Inventário Extrajudicial</li>
                <li>Regularização Fundiária Urbana e Rural</li>
                <li>Alienação Fiduciária de Imóvel</li>
                <li>Adjudicação Compulsória de Imóvel</li>
                <li>Usucapião Extrajudicial</li>
              </ul>
              <a
                href="https://wa.me/5561999719217?text=Ol%C3%A1%2C+vim+pelo+site%21+Quero+falar+sobre+servi%C3%A7o+EXTRAJUDICIAL"
                target="_blank"
              >
                <Button minWidth="247px">Fale agora</Button>
              </a>
            </>
          </Accordion>

          <Accordion
            iconHeader={iconJudi}
            textHeader="JUDICIAL"
            show={showAccordion !== 4 && showAccordion !== null ? false : true}
            onClick={() => toggleShowAccordion(4)}
          >
            <>
              <p>
                Diante da negativa na resolução alternativa de conflito, seja
                pela composição amigável, seja pela negociação, trabalhamos com
                um processo de trabalho eficiente para que o cliente tenha a
                tutela de seus direitos garantidos frente ao Poder Judiciário,
                seja na 1ª ou 2ª Instância, sempre tendo ao norte as fontes do
                direito que regem o ordenamento jurídico brasileiro. Para tanto,
                dentre os diversas possibilidades de ações e atos para a tutela
                dos direitos, trabalhamos com:
              </p>

              <ul>
                <li>Ações Possessórias</li>
                <li>Usucapião Judicial</li>
                <li>Inventário Judicial</li>
                <li>Adjudicação Judicial</li>
              </ul>
              <a
                href="https://wa.me/5561999719217?text=Ol%C3%A1%2C+vim+pelo+site%21+Quero+falar+sobre+servi%C3%A7o+JUDICIAL"
                target="_blank"
              >
                <Button minWidth="247px">Fale agora</Button>
              </a>
            </>
          </Accordion>
        </Wrapper>
      </Content>
    </Container>
  );
}
