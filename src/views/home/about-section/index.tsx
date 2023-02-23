import React from "react";

import { Container, Content } from "./styles";

export default function AboutSection() {
  return (
    <Container>
      <Content>
        <strong>Entenda como trabalhamos</strong>
        <h1>SOBRE NÓS</h1>

        <p>
          Somos uma empresa de serviços jurídicos comprometida com a proteção
          dos direitos e interesses de nossos clientes. Contamos com uma equipe
          altamente capacitada e tecnologia avançada para fornecer soluções
          eficientes e personalizadas.
        </p>

        <p>
          Acreditamos que a comunicação clara e objetiva é a chave para o
          sucesso em qualquer processo jurídico. Por isso, trabalhamos de perto
          com nossos clientes para garantir que eles estejam sempre informados e
          envolvidos em cada etapa do processo.
        </p>
        <p>
          Não importa o tamanho ou a complexidade do desafio enfrentado, estamos
          sempre prontos para encontrar soluções criativas e inovadoras para
          proteger os direitos e interesses de nossos clientes.
        </p>
      </Content>
    </Container>
  );
}
