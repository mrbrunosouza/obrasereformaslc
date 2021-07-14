import { DesignedBy } from "../DesignedBy";
import { Container, Content } from "./styles";

export function Footer() {
  return(
    <>
      <Container id="contatos">
        <Content>
          <section className="about-us">
            <h3>Sobre nós</h3>
            <img className="logo" src="obras-e-reformas-lc.svg" alt="" />
            <p>A Obras e reformas LC é uma empresa com mais de 7 anos de mercado e que vem garantindo a satisfação de inúmeros clientes.
            </p>
            <p>
              Hoje ela oferece diversos tipos de serviço como construção civil, obras e reformas em geral, serviços como construção e manutenção de telhados, pinturas em geral, serviço de impermeabilização e pavimentação &#40;paver e concreto&#41;.
            </p>
          </section>
          <section className="contact">
            <h3>Contatos</h3>
            <span>
              <span>Endereço: </span>Rua Harry Feeken, 735 - São José dos Pinhais/PR
            </span>
            <a href="tel:+5545998133564">
              <span>Telefone: </span>&#40;45&#41; 9 9813-3564
            </a>
            <a href="mailto:mr.brunosouza@gmail.com">
              <span>E-mail: </span>mr.brunosouza@gmail.com
            </a>
            <div className="socials">
              <a href="https://www.facebook.com" target="_blank">
                <img src="logo-fb.svg" alt="Imagem do facebook" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
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