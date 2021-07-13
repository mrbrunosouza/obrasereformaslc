import styled, { css } from "styled-components";

export const Container = styled.section`
padding: 5rem 20rem;

background-image: url('background-featured-services.png');
background-size: cover;
background-position-x: 50%;
background-position-y: center;

color: #FFF;
`

export const Title = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-bottom: 3rem;


 h2 {
   font-weight: 400;
   font-size: 1.7rem;

   text-transform: uppercase;
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

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImgButton = styled.figure`
  background: red;

 position: relative;
 width: 23rem;
 height: 23rem;

 border: none;

 img {
   width: 100%;
   height: 100%;

   transition: all 0.3s;
 }

 .figure-legend {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  h3 {
    color: transparent;
    transition: all 0.5s;
  }  
  
  p {
    color: transparent;
    font-weight: 500;
    transition: all 0.5s;
  }
}

&:hover {
  img {
    filter: contrast(0.7);
  }

  h3 {
    color: #FFF;
  }

  p {
    color: #ffbc13;
  }
 }
 `