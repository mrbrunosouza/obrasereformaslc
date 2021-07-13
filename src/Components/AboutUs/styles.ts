import styled from "styled-components";

export const Container = styled.section`
 display: flex;
 align-items: flex-start;
 justify-content: space-between;
 gap: 2rem;

 padding: 5rem 20rem;

 .section-about {
  width: 100%; 

   h2 {
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 2rem;
   }

   p {
     font-size: 1.1rem;
   }

   .first-paragraph {
     margin-top: 2rem;
   }
 }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  

  &+div {
    margin-top: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: none;
    background: #eee;
    padding: 1rem 1.2rem;

    img {
      width: 0.9rem;
      height: 0.9rem;
    }

    svg {
      width: 0.7rem;
      height: 0.7rem;
      fill: #000;
    }

    transition: all 0.3s;
  }

  .active {
    background: #003E98;
    color: #FFF;

    svg {
      fill: #FFF;
    }
  }

  .description {
    display: none;
  }

  .show-description {
    padding: 1.8rem 0.5rem;
  }
`