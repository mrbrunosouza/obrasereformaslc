import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: #222;
  padding: 8rem 0;

  margin-bottom: 5rem;
`

export const Content = styled.div`
  width: 1260px;
  margin: 0 auto;

  text-align: right;
  color: #FFF;
  font-size: 1.8rem;
  text-transform: uppercase;

  .company {
    text-transform: capitalize;
  }

  .title {
    font-size: 4rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  .dashboards {
    display: flex;
    justify-content: flex-end;
    gap: 3rem;
  }

`

export const Dashboard = styled.div`
text-align: center;

.data {
  font-size: 3rem;
  font-weight: 500;

  span {
    color: #00AECC;
  }
}

.description {
  font-size: 0.9rem;
}

`