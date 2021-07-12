import React from 'react';
import { Fade } from 'react-slideshow-image';
import { Container } from './styles';

const fadeImages = [
  {
    id: 1,
    urlImage: 'slide/image-1.jpg'
  },
  {
    id: 2,
    urlImage: 'slide/image-2.jpg'
  },
  {
    id: 3,
    urlImage: 'slide/image-3.jpg'
  },
];

export function SlideMain() {

  return(
    <Container>
      <section className="slide-container">
        <Fade cssClass="slideshow" arrows={false} duration={5000}>
          {fadeImages.map((slide) => (
            <div className="each-fade" key={slide.id}>
              <div className="image-container">
                <img src={slide.urlImage} />
              </div>
            </div>
          ))}
        </Fade>
      </section>
    </Container>
  )
}