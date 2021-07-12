import styled, { keyframes } from 'styled-components'

const blinkCursor = keyframes`
  from {
      border-right: 2px solid rgba(255, 255, 255, 0.75);
    }

  to {
    border-right: transparent;
  }
`

const typing = keyframes`
  0% { width: 0}
  50% { width: 38rem}
  100% { border: transparent;}
`

export const Container = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 18rem;
  
.content-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

  .line {
    display: flex;
    font-size: 5rem;
    color: #FFF;
    text-shadow: #222 0 0 8px;
    text-transform: uppercase;
    font-weight: 600;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .typing-animation {
    animation: ${blinkCursor} 800ms steps(20) infinite normal, 
    ${typing} 5s steps(20) 1s normal both;
  }
`

const titleAnimation = keyframes`
  0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      background: rgba(0, 0, 0, 0.0);

  }
  100% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
`
const buttonAnimation = keyframes`
  0% {
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0);
      background: rgba(0, 0, 0, 0.0);

  }
  100% {
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0);
  }
`

const pageDownAnimation = keyframes`
  0% {
      transform: translateY(-35px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0);
      background: rgba(0, 0, 0, 0.0);

  }
  100% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0);
  }
`

export const Content = styled.section`
    text-align: center;
    position: relative;
    width: 50rem;

  h1, h2{
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 400;    
    
    span{
      width: 100%;
      float: left;
      color: #ffffff;
      text-shadow: #222 0 0 8px;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      transform: translateY(-50px);
      opacity: 0;
      animation-name: ${titleAnimation};
      animation-duration: 2s;
    }
  }
  h1 span{
    animation-delay: 3.8s;
    -webkit-animation-fill-mode: forwards;

    &:first-child{
      animation-delay: 3.9s;

    }

    &:last-child{
      animation-delay: 3.7s;
    }
  }

  h2{ 
    top: 0;
    position: absolute;
    
    span{
      animation-delay: 4.1s;
      -webkit-animation-fill-mode: forwards;

      &:first-child{
        animation-delay: 4.2s;

      }

      &:last-child{
        color: #ffe221;
        animation-delay: 4s;
      }
    }
  }

  .usechrome{
    font-size: 10px;
    color: #fff;
    font-family: helvetica, arial;
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    left: 0;
  }

`

export const Button = styled.a`
  background: #003E98;
  padding: 1rem 2rem;
  border-radius: 5px;
  margin-top: 3rem;

  color: #FFF;
  text-transform: uppercase;
  font-weight: 500;

  transition: background 0.2s;

  &:hover {
    background: #6A7F98;
  }

  opacity: 0;
  animation-name: ${buttonAnimation};
  animation-duration: 2s;
  animation-delay: 5s;
  -webkit-animation-fill-mode: forwards;
`

export const PageDown = styled.a`
  padding-bottom: 1rem;

  animation-name: ${pageDownAnimation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;

  img {
    width: 1.3rem;
  }
`