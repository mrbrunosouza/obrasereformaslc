import { Contact } from '../Contact'
import { Container, Logo, Navigation } from './styles'

export function Header() {
  return (
    <Container>
      <Contact/>
      <section className="logo-menus-section">
        <Logo href="/">
          <img src="obras-e-reformas-lc.svg" alt="Logo obras e reformas LC" />
        </Logo>
        <Navigation>
          <a href="#servicos">Serviços</a>
          <a href="#sobre-nos">Quem somos</a>
          <a href="#projetos-realizados">Projetos realizados</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contatos">Contatos</a>
        </Navigation>
      </section>
    </Container>
  )
}