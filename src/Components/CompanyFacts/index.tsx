import { Container, Content, Dashboard } from "./styles";

export function CompanyFacts() {
  return(
    <Container>
      <Content>
        <span className="company">Abraão Posto de Molas</span>
        <h3 className="title">Entrega e satisfação</h3>
        <div className="dashboards">
          <Dashboard>
            <p className="data">1200<span>+</span></p>
            <p className="description">Serviços realizados</p>
          </Dashboard>
          <Dashboard>
            <p className="data">920<span>+</span></p>
            <p className="description">Clientes satisfeitos</p>
          </Dashboard>
        </div>
      </Content>
    </Container>
  )
}