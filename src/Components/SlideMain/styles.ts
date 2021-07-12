import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;

  .slideshow{
    
    .each-fade {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
    }

    .image-container {
      width: 100%;
      height: 100vh;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`

export const MainText = styled.section`
  font-size: 4rem;
`