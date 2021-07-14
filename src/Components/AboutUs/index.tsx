import { useState } from "react";
import { Buttons, Container } from "./styles";

const whyChooseUs = [
  {
    id: 1,
    title: 'Segurança acima de tudo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere neque expedita, ipsum cupiditate iusto ut delectus laudantium, impedit aliquam voluptatem ullam, alias optio eius incidunt cumque. Eaque, amet enim!'
  },
  {
    id: 2,
    title: 'Compromisso com a entrega',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere neque expedita, ipsum cupiditate iusto ut delectus laudantium, impedit aliquam voluptatem ullam, alias optio eius incidunt cumque. Eaque, amet enim!'
  },
]

export function AboutUs() {
  const [optionSelected, setOptionSelected] = useState<number>();
  const [active, setActive] = useState(false)

  return (
    <Container id="sobre-nos">
      <section className="section-about">
        <h2>Por que escolher a LC Reformas?</h2>
        {whyChooseUs.map((option) => (
          <Buttons key={option.id}>
            <button 
              onClick={() => {setOptionSelected(option.id), setActive(!active)}} 
              className={`${option.id === optionSelected ? 'active' : ''}`}
            >
              {option.id === optionSelected ? <img src="not-show.svg" alt="" /> : <img src="show-more.svg" alt="" />}
              {option.title}
              <svg width="117" height="63" viewBox="0 0 117 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M114.9 1.2C113.3 -0.4 110.7 -0.4 109.1 1.2L58.1 52.3L7 1.2C5.4 
                  -0.4 2.8 -0.4 1.2 1.2C-0.4 2.8 -0.4 5.4 1.2 7L55.1 60.9C55.9 61.7 
                  56.9 62.1 58 62.1C59 62.1 60.1 61.7 60.9 60.9L114.8 7C116.5 5.4 
                  116.5 2.8 114.9 1.2V1.2Z" 
                />
              </svg>
            </button>
            <p 
              className={`${option.id === optionSelected ? 'show-description' : 'description'}`}
            >
              {option.description}
            </p>
          </Buttons>
        ))}
      </section>
      <section className="section-about">
        <h2>Sobre nós</h2>
        <p className="first-paragraph">
          A Obras e reformas LC é uma empresa com mais de 7 anos de mercado e que vem garantindo a satisfação de inúmeros clientes.
        </p>
        <br />
        <p>
          Hoje ela oferece diversos tipos de serviço como construção civil, obras e reformas em geral, serviços como construção e manutenção de telhados, pinturas em geral, serviço de impermeabilização e pavimentação &#40;paver e concreto&#41;.
        </p>
      </section>
    </Container>
  )
}