/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Fade } from 'react-slideshow-image';
import { Container } from './styles';

const fadeImages = [
  {
    id: 1,
    urlImage: 'slide/oficina-1.jpeg'
  },
  {
    id: 2,
    urlImage: 'slide/oficina-2.jpeg'
  },
  {
    id: 3,
    urlImage: 'slide/oficina-3.jpeg'
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