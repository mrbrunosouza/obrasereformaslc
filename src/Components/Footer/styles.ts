import styled from "styled-components";

export const Container = styled.footer`
  background: #222;
  color: #FFF;

  margin-top: 5rem;

  padding: 4rem 0;


  .logo {
    width: 7rem;
  }
`

export const Content = styled.div`
  width: 1280px;
  margin: 0 auto;

  display: flex;

  h3 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .about-us {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      width: 70%;
      color: #aaa;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    color: #aaa;

    h3 {
      margin-bottom: 1rem;
      color: #FFF;
    }
  }
  
  .socials {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
`