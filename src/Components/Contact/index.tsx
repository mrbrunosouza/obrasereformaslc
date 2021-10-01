/* eslint-disable @next/next/no-img-element */
import { Contacts, Container, Socials } from "./styles";

interface ContactProps {
  background?: string;
}

export function Contact({ background }: ContactProps) {
  return(
    <Container background={background}>
        <Socials>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="logo-fb.svg" alt="Imagem do facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
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
      </Container>
  )
}