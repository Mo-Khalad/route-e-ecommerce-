import React from "react";
import slider_image_one from "../../images/slider-image-1.jpeg";
import slider_image_two from "../../images/slider-image-2.jpeg";
import slider_image_three from "../../images/slider-image-3.jpeg";
import { Col } from "react-bootstrap";
import banner from "../../images/grocery-banner.jpeg";
import banner2 from "../../images/grocery-banner-2.jpeg";
import HomeSlider from "./HomeSlider";

const MainSlider = () => {
  const mainImages = [slider_image_one, slider_image_two, slider_image_three];

  return (
    <>
      <Col md={9} className="py-5">
        <HomeSlider
          slidesToShow={1}
          lg={1}
          md={1}
          sm={1}
          speed={1000}
          display={"none"}
          dots={true}
        >
          {mainImages.map((images) => {
            return (
              <div key={images}>
                <img src={images} alt={images} className="w-100" height={500} />
              </div>
            );
          })}
        </HomeSlider>
      </Col>

      <Col>
        <div>
          <img src={banner} alt="banner" className="w-100 m-2" height={225} />
        </div>

        <div>
          <img src={banner2} alt="banner2" className="w-100 m-2" height={225} />
        </div>
      </Col>
    </>
  );
};

export default MainSlider;
