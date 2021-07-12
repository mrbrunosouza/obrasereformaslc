import { Container, Service } from "./styles";

const services = [
  {
    title: "Telhados",
    description: 'Aqui vai um pequeno texto para demonstrar o serviço que fazemos'
  },
  {
    title: "Impermeabilização",
    description: 'Aqui vai um pequeno texto para demonstrar o serviço que fazemos'
  },
  {
    title: "Pintura",
    description: 'Aqui vai um pequeno texto para demonstrar o serviço que fazemos'
  },
  {
    title: "Pavimentação",
    description: 'Aqui vai um pequeno texto para demonstrar o serviço que fazemos'
  },
  {
    title: "Construção Civil",
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
              <img src="down-arrow.svg" alt="" />
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