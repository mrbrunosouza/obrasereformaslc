/* eslint-disable @next/next/no-img-element */
import { Container, Service } from "./styles";

const services = [
  {
    title: "Suspensão",
    description: 'Aqui vai um pequeno texto para demonstrar o serviço que fazemos'
  },
  {
    title: "Freios",
    description: 'Aqui vai um pequeno texto para demonstrar o serviço que fazemos'
  },
  {
    title: "Soldas",
    description: 'Aqui vai um pequeno texto para demonstrar o serviço que fazemos'
  },
  {
    title: "Torno",
    description: 'Aqui vai um pequeno texto para demonstrar o serviço que fazemos'
  },
];

export function MainServices() {
  return (
    <Container id="servicos">
      <h2>Nossos serviços</h2>
      <div className="services-section">
        {services.map((service) => (
          <Service key={service.title}>
            <div className="service-icon">
              <img src="right-arrow.svg" alt="" />
            </div>
            <div>
              <p className="title">
                {service.title}
              </p>
              <p className="description">
                {service.description}
              </p>
            </div>
          </Service>
        ))}
      </div>
    </Container>
  )
}