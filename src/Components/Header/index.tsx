import { Container, Socials, Contacts, Logo, Navigation } from './styles'

export function Header() {
  return (
    <Container>
      <section className="social-contact-section">
        <Socials>
          <a href="https://www.facebook.com" target="_blank">
            <img src="logo-fb.svg" alt="Imagem do facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="insta.png" alt="Imagem do instagram" />
          </a>
        </Socials>
        <Contacts>
          <a href="tel:+5545998133564">
            (45) 9 9813-3564
          </a>
          <a href="mailto:mr.brunosouza@gmail.com">
            mr.brunosouza@gmail.com
          </a>
          <span>
            Seg-Sex: 08:00 - 18:00
          </span>
        </Contacts>
      </section>
      <section className="logo-menus-section">
        <Logo href="/">
          <img src="obras-e-reformas-lc.svg" alt="Logo obras e reformas LC" />
        </Logo>
        <Navigation>
          <a href="#servicos">Serviços</a>
          <a href="">Quem somos</a>
          <a href="">Obras realizadas</a>
          <a href="">Depoimentos</a>
          <a href="">Contato</a>
        </Navigation>
      </section>
    </Container>
  )
}