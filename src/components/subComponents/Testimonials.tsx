import React from "react";
import { Carousel } from "react-bootstrap";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <div className="cubeAnimation">
      <div data-src="./pictures/1.png" />
      <div data-src="./pictures/1.jpeg" />
      <div data-src="./pictures/1.png" />
    </div>
  );
}
