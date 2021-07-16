import styled from "styled-components";

export const Container = styled.section`
  max-width: 1260px;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2.5rem;

  h3 {
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  .button-section {
   display: flex;
   align-items: center;
   gap: 0.5rem;
 }

 button {
  background: none;
  border: 1px solid #00AECC;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: brightness(1.3);

  svg {
    width: 0.5rem;
    height: 0.5rem;
    fill: #00AECC;
    filter: brightness(1.3);
  }

  &:disabled {
    cursor: default;
    border-color: #333;

    svg {
      fill: #333;
    }
  }
 }
`

export const Testimonial = styled.div`
  
  .description {
    background: rgba(245, 245, 245, 1);
    font-style: italic;
    padding: 2.5rem 1rem;
  }

  .client {
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;

    margin-left: 1rem;
    margin-top: 1rem;
  }

  .company {
    display: block;

    margin-left: 1rem;
    margin-top: 0.2rem;
  }
`