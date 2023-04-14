import {
  Container,
  Content,
  LeftSide,
  RightSide,
  MainContent,
  ContentSlide,
  SlideWrap,
} from "./styles";
import balance from "../../../assets/imgs/backgrounds/main-section/balance.svg";
import { Header } from "../../../components/layout/header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import logoPng from "../../../assets/imgs/logo/logo-footer.svg";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

export function MainSection() {
  return (
    <Container>
      <Content>
        <LeftSide>
          <Header />
          <MainContent>
            <h1>SEJA BEM-VINDO(A)!</h1>
            <p>
            A Lucas Leite - Sociedade Individual de Advocacia concentra seus esforços em uma atuação extrajudicial, visando a resolução alternativa de conflitos, seja pela composição amigável, seja pela negociação, buscando construir o ‘advogado do futuro’, que segundo o Ministro Luís Roberto Barroso, “não é aquele que propõe a ação judicial, mas aquele que resolve o problema sem propor a ação, por meio da negociação e composição amigável
            </p>

            <a
              href="https://wa.me/5561999719217?text=Ol%C3%A1%2C+vim+pelo+site%21+Quero+falar+com+um+advogado"
              target="_blank"
            >
              <button className="contato">FALE CONOSCO</button>
            </a>
          </MainContent>
        </LeftSide>
        <RightSide>
          <ContentSlide>
            <Splide
              aria-label="My Favorite Images"
              options={{
                rewind: true,
                width: 800,
                gap: "1rem",
                arrows: false,
                autoplay: true,
              }}
            >
              <SplideSlide>
                <SlideWrap>
                  <img src={logoPng} alt="Image 1" />
                  <h1>Lucas Leite</h1>
                  <p>Sociedade Unipessoal de Advocacia</p>
                </SlideWrap>
              </SplideSlide>
              <SplideSlide>
                <SlideWrap>
                  <img src={logoPng} alt="Image 1" />
                  <h1>Lucas Leite</h1>
                  <p>Sociedade Unipessoal de Advocacia</p>
                </SlideWrap>
              </SplideSlide>

              <SplideSlide>
                <SlideWrap>
                  <img src={logoPng} alt="Image 1" />
                  <h1>Lucas Leite</h1>
                  <p>Sociedade Unipessoal de Advocacia</p>
                </SlideWrap>
              </SplideSlide>
            </Splide>
          </ContentSlide>
        </RightSide>
      </Content>
    </Container>
  );
}
