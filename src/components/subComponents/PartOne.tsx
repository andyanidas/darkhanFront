import React from "react";
import { Carousel } from "react-bootstrap";
import { images } from "../../services/otherServices";

export function PartOne() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30"
          src={images.slide.image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <img src={images.other.slideLogo} alt="" />
          <h3>First slide label</h3>

          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.slide.image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30"
          src={images.slide.image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
