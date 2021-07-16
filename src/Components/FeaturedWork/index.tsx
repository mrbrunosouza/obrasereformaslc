import { Container, Gallery, ImgButton, Title } from "./styles";

const imgGallery = [
  {
    id: 1,
    urlImage: 'projetos/predio.png',
    nameService: 'Torre gêmeas',
    typeService: 'Construção'
  },
  {
    id: 2,
    urlImage: 'projetos/casa.png',
    nameService: 'Casa de campo',
    typeService: 'Construção'
  },
  {
    id: 3,
    urlImage: 'projetos/casa-interior.png',
    nameService: 'Sala de vídeo',
    typeService: 'Reforma'
  },
];

export function FeaturedWork() {
  return (
    <Container id="projetos-realizados">
      <Title>
        <h2>Projetos realizados</h2>
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