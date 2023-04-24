import { Container, Content, ContentMap, MapWrap, WrapInfo } from "./styles";
import { Button } from "../../../components/button";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function AboutSection() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Container id="SOBRE">
      <Content>
        <h1>SOBRE NÓS</h1>

        <p>
          Temos como missão gerar um atendimento que democratize o direito, de
          maneira disruptiva e distante de processos conservadores, bem como que
          facilite o entendimento do cliente na construção da solução para o
          caso concreto, com uma abordagem menos rebuscada e mais eficiente;
          Dessa forma, buscando ser auto sustentável no mercado da advocacia
          privada brasiliense, a visão da empresa é ser uma referência para a
          jovem e empreendedora advocacia; Para tanto, cada processo nosso tem
          como valores atender de forma humanizada, levar o direito com clareza,
          objetividade e simplicidade para os clientes e entregar resultados com
          celeridade e eficiência.
        </p>
      </Content>
      <ContentMap>
        <WrapInfo>
          <h1 className="title">ONDE ESTAMOS LOCALIZADOS?</h1>
          <a
            href="https://wa.me/5561999719217?text=Ol%C3%A1%2C+vim+pelo+site%21+Gostaria+de+agendar+uma+reuni%C3%A3o"
            target="_blank"
            className="desktop"
          >
            <Button>QUERO AGENDAR UMA REUNIÃO</Button>
          </a>
        </WrapInfo>
        <MapWrap className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32542.48363731476!2d-47.94097822134579!3d-15.81608915681248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a255a18da5f17%3A0xc5aeaf18c2c06801!2sEQS%20414%2F415%20-%20Asa%20Sul%2C%20Bras%C3%ADlia%20-%20DF%2C%2070297-400!5e0!3m2!1spt-BR!2sbr!4v1681434705848!5m2!1spt-BR!2sbr"
            className="teste"
            style={{ border: 0 }}
            loading="lazy"
            height={428}
            title="Endereço google maps"
            referrerPolicy="no-referrer-when-downgrade"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          ></iframe>

         
        </MapWrap>

        <a
            href="https://wa.me/5561999719217?text=Ol%C3%A1%2C+vim+pelo+site%21+Gostaria+de+agendar+uma+reuni%C3%A3o"
            target="_blank"
            className="mobile"
          >
            <Button>QUERO AGENDAR UMA REUNIÃO</Button>
          </a>
      </ContentMap>
    </Container>
  );
}
