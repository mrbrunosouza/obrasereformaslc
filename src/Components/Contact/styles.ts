import styled, { css } from "styled-components";

interface ContainerProps {
  background?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 99vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #FFF;

  padding: 10px 20rem;


  ${(props) => props.background ? css`
    background: ${props.background};
  ` : ''}
`

export const Socials = styled.div`
display: flex;
align-items: center;
gap: 1.5rem;


img {
  height: 1.3rem;
}
`

export const Contacts = styled.div`
display: flex;
align-items: center;
gap: 1.5rem;
`