import styled from 'styled-components'

export const Container = styled.section`
position: absolute;
top: 0;
left: 0;

height: 125px;

background: rgba(0, 0, 0, 0.3);

color: #FFF;

.social-contact-section {
  width: 99vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #FFF;

  padding: 10px 20rem;
}

.logo-menus-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rem;
  height: 79px;
}
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

export const Logo = styled.a`

img {
  height: 3.8rem;
}
`

export const Navigation = styled.nav`
display: flex;
gap: 2rem;

font-weight: 500;
text-transform: uppercase;

a {
  transition: color 0.3s;

  &:hover {
    color: #ffbc13;
  }
}
`