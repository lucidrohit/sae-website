import "./carousel.scss";
import { Carousel as CarouselComponent } from "react-bootstrap";

function Carousel({ slides }) {
  return (
    <CarouselComponent >
      {slides.map((slide,index) => {
        return (
          <CarouselComponent.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.posterUrl}
              alt="First slide"
            />
          </CarouselComponent.Item>
        );
      })}
    </CarouselComponent>
  );
}

export default Carousel;
