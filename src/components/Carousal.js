import React, { useState, useEffect } from "react";
import image1 from "../assets/Cascade Spa Images-28.jpg";
import image2 from "../assets/Cascade_Spa_Images-13.jpg";
import image3 from "../assets/Cascade_Spa_Images-16.jpg";
import image4 from "../assets/Cascade_Spa_Images-25.jpg";
import image5 from "../assets/Cascade_Spa_Images-27.jpg";

const Carousel = () => {
  const images = [image1, image2, image3, image4, image5];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((oldCurrent) => (oldCurrent + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="">
      <img
        src={images[current]}
        alt={`Carousel ${current}`}
        className="w-full lg:max-h-[700px] object-cover"
      />
    </section>
  );
};

export default Carousel;
