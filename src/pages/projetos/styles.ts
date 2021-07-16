import styled from "styled-components";

export const Container = styled.section`

`

export const Title = styled.section`
  background: #eee;

  margin-top: 125px;

  padding: 4rem 0;

  h2 {
    width: 1280px;
    margin: 0 auto;
    
    font-size: 2.5rem;
    font-weight: 400;
  }

`

export const Gallery = styled.section`
  width: 1280px;
  margin: 4rem auto;

  text-align: center;

  .gallery-title {
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  .description {
    width: 65%;
    margin: 2rem auto;
  }

`

export const Projects = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 2rem;

  width: 1280px;
`

export const ImgButton = styled.figure`
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