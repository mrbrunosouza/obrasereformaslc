/* eslint-disable @next/next/no-img-element */
import { Container, Gallery, ImgButton, Title } from "./styles";

const imgGallery = [
  {
    id: 1,
    urlImage: 'projetos/molas_1.jpeg',
    nameService: 'Troca de molas',
    typeService: 'Suspensão'
  },
  {
    id: 2,
    urlImage: 'projetos/molas_2.jpeg',
    nameService: 'Substituição de molas',
    typeService: 'Suspensão'
  },
  {
    id: 3,
    urlImage: 'projetos/molas_1.jpeg',
    nameService: 'Molas',
    typeService: 'Suspensão'
  },
];

export function FeaturedWork() {
  return (
    <Container id="projetos-realizados">
      <Title>
        <h2>Serviços realizados</h2>
        <div className="button-section">
          <a href="/projetos">Veja Mais...</a>
        </div>
      </Title>
      <Gallery>
        {imgGallery.map((image) => (
          <a href="" key={image.id}>
            <ImgButton>
              <img src={image.urlImage} alt="" />
              <figcaption>
                <div className="figure-legend">
                  <h3>{image.nameService}</h3>
                  <p>{image.typeService}</p>
                </div>
              </figcaption>            
            </ImgButton>
          </a>
        ))}
      </Gallery>
    </Container>
  )
}