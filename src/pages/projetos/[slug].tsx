import { Container, Gallery, Projects, ImgButton, Title } from "./styles";

const imgGallery = [
  {
    id: 1,
    urlImage: '../projetos/predio.png',
    nameService: 'Torre gêmeas',
    typeService: 'Construção'
  },
  {
    id: 2,
    urlImage: '../projetos/casa.png',
    nameService: 'Casa de campo',
    typeService: 'Construção'
  },
  {
    id: 3,
    urlImage: '../projetos/casa-interior.png',
    nameService: 'Sala de vídeo',
    typeService: 'Reforma'
  },
  {
    id: 4,
    urlImage: '../projetos/predio.png',
    nameService: 'Torre gêmeas',
    typeService: 'Construção'
  },
  {
    id: 5,
    urlImage: '../projetos/casa.png',
    nameService: 'Casa de campo',
    typeService: 'Construção'
  },
  {
    id: 6,
    urlImage: '../projetos/casa-interior.png',
    nameService: 'Sala de vídeo',
    typeService: 'Reforma'
  },
];

export default function Projetos() {
  return(
    <Container>
      <Title>
        <h2>Projetos realizados</h2>
      </Title>
      <Gallery>
        <h3>Galeria de projetos</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis 
          non ea tempore omnis deserunt, quibusdam laborum voluptatum aliquam, 
          numquam praesentium beatae debitis, necessitatibus nobis eligendi 
          quis ipsum aliquid suscipit ad!
        </p>
        <Projects>
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
        </Projects>
      </Gallery>
    </Container>
  )
}