/* eslint-disable @next/next/no-img-element */
import { Button, Container, Content, PageDown } from "./styles";

export function Main() {
  return (
    <Container>
      <div className="content-section">
        <div>
          <p className="line typing-animation">
            Abraão posto de molas
          </p>
        </div>
        <Content>
          <h1 className="title">
            <span>Nossa experiência garante que seus serviços serão realizados</span>
            <span>da maneira correta e com o máximo profissionalismo.</span>
          </h1>
        </Content>
        <Button href="#sobre-nos">
          Sobre nós
        </Button>
      </div>
      <PageDown href="#servicos">
        <img src="down-arrow.svg" alt="" />
      </PageDown>
    </Container>
  )
}