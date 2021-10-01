/* eslint-disable @next/next/no-img-element */
import { DesignedBy } from "../DesignedBy";
import { Container, Content } from "./styles";

export function Footer() {
  return(
    <>
      <Container id="contatos">
        <Content>
          <section className="about-us">
            <h3>Sobre nós</h3>
            <img className="logo" src="logo_abraao.png" alt="" />
            <p>O Posto de Molas Abraão, é uma empresa que atua no mercado de molas e suspensão a mais de 10 anos no mercado.
            </p>
            <p>
              Oferecendo serviço de qualidade e com agilidade incomparável.
            </p>
          </section>
          <section className="contact">
            <h3>Contatos</h3>
            <span>
              <span>Endereço: </span>BR-133, KM-344 - Guaíra/PR
            </span>
            <a href="tel:+5545998133564">
              <span>Telefone: </span>&#40;45&#41; 9 9813-3564
            </a>
            <a href="mailto:mr.brunosouza@gmail.com">
              <span>E-mail: </span>mr.brunosouza@gmail.com
            </a>
            <div className="socials">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src="logo-fb.svg" alt="Imagem do facebook" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src="insta.png" alt="Imagem do instagram" />
              </a>
            </div>
          </section>
        </Content>
      </Container>
      <DesignedBy />
    </>
  )
}