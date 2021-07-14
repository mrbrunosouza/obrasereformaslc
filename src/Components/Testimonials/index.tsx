import { useState } from "react";
import { Container, Header, Testimonial } from "./styles";

const testimonials = [
  {
    id: 1,
    testimonial: 'O trabalho foi excepcional, um maravilhoso serviço. Gostei muito daquele gordinho que ficou responsável pela obra',
    client: 'Giuseppe Cadura',
    company: 'Torre gêmeas'
  },
  {
    id: 2,
    testimonial: 'Feito com muita excelência, sempre recomendarei o trabalho dessa empresa',
    client: 'Lima Silva',
    company: 'Limas Turbo'

  },
  {
    id: 3,
    testimonial: 'Fantástico!!! Mudou o visual da minha empresa com a reforma realizada pela LC Reformas',
    client: 'Fulano de Tal',
    company: 'Casa da chácara'
  },
]

export function Testimonials() {

  const [viewTestimonial, setViewTestimonial] = useState(0)

  return(
    <Container id="depoimentos">
        <Header>
          <h3>Depoimentos</h3>
          <div className="button-section">
            <button
              type="button" 
              onClick={() => (setViewTestimonial(viewTestimonial - 1))}
              disabled={viewTestimonial === 0}
            >
              <svg width="63" height="117" viewBox="0 0 63 117" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M60.9 114.9C62.5 113.3 62.5 110.7 60.9 109.1L9.79998 58.1L60.9 
                    7C62.5 5.4 62.5 2.8 60.9 1.2C59.3 -0.4 56.7 -0.4 55.1 1.2L1.19997 
                    55.1C0.39997 55.9 -2.67029e-05 56.9 -2.67029e-05 58C-2.67029e-05 
                    59 0.39997 60.1 1.19997 60.9L55.1 114.8C56.7 116.5 59.3 116.5 
                    60.9 114.9V114.9Z"
                  />
              </svg>
            </button>
            <button
              type="button" 
              onClick={() => (setViewTestimonial(viewTestimonial + 1))}
              disabled={viewTestimonial === (testimonials.length -1)}
            >
              <svg width="63" height="117" viewBox="0 0 63 117" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M1.2 1.1878C-0.4 2.7878 -0.4 5.3878 1.2 6.9878L52.3 57.9878L1.2 
                  109.088C-0.4 110.688 -0.4 113.288 1.2 114.888C2.8 116.488 5.4 116.488 7 
                  114.888L60.9 60.9878C61.7 60.1878 62.1 59.1878 62.1 58.0878C62.1 
                  57.0878 61.7 55.9878 60.9 55.1878L7 1.2878C5.4 -0.412193 2.8 
                  -0.412201 1.2 1.1878Z" 
                />
              </svg>
            </button>
          </div>
        </Header>
          <Testimonial key={testimonials[viewTestimonial].id}>
            <p className="description" >{testimonials[viewTestimonial].testimonial}</p>
            <span className="client" >{testimonials[viewTestimonial].client}</span>
            <span className="company">{testimonials[viewTestimonial].company}</span>
          </Testimonial>
    </Container>
  )
}