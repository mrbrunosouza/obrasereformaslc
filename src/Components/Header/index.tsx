/* eslint-disable @next/next/no-img-element */
import { Contact } from '../Contact'
import { Container, Logo, Navigation } from './styles'

export function Header() {
  return (
    <Container>
      <Contact/>
      <section className="logo-menus-section">
        <Logo href="/">
          <img className="logo" src="logo_abraao.png" alt="Logo Abraão Posto de Molas" />
        </Logo>
        <Navigation>
          <a href="#servicos">Serviços</a>
          <a href="#sobre-nos">Quem somos</a>
          {/* <a href="#projetos-realizados">Serviços realizados</a> */}
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contatos">Contatos</a>
        </Navigation>
      </section>
    </Container>
  )
}