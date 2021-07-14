import { Container, Content, Dashboard } from "./styles";

export function CompanyFacts() {
  return(
    <Container>
      <Content>
        <span className="company">LC Reformas e Construções</span>
        <h3 className="title">Entrega e satisfação</h3>
        <div className="dashboards">
          <Dashboard>
            <p className="data">1200<span>+</span></p>
            <p className="description">Projetos concluídos</p>
          </Dashboard>
          <Dashboard>
            <p className="data">920<span>+</span></p>
            <p className="description">Clientes satisfeitos</p>
          </Dashboard>
          <Dashboard>
            <p className="data">4<span>+</span></p>
            <p className="description">Projetos em execução</p>
          </Dashboard>
        </div>
      </Content>
    </Container>
  )
}