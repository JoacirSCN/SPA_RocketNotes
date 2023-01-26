// Pegando o elemento html estilizado
import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, illo. Culpa nemo cumque perspiciatis, quibusdam facere dolorum amet eaque nesciunt error, quis provident porro recusandae, sit corrupti tempora distinctio earum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quos officia beatae eaque inventore voluptatibus quae maiores et aliquam architecto quas quis, optio ipsam voluptas impedit at voluptates odio odit.
          </p>
          
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Entrar" loading />

        </Content>
      </main>
    </Container>
  );
}
