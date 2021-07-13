import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 20rem;

  text-align: center;

  h2 {
    margin-bottom: 3rem;
    text-transform: uppercase;
    font-weight: 500;
  }

  .services-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

`

export const Service = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-align: left;

  .service-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    background: #003E98;
    padding: 1rem;

    img {
      width: 3rem;
      height: 3rem;
    }
  }

  .title {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .description {
    line-height: 1.8rem;
  }

`