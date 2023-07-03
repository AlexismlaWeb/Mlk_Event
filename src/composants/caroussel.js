import table_mlk from "../mlk_table.PNG";
import mlk_cards from "../mlk_cards.PNG";
import "../composants/Carousel.css";
import { useState } from "react";

function Carousel() {
  const array_img = [table_mlk, mlk_cards];

  const [slide, setSlide] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= array_img.length) {
      newIndex = 0;
    }
    console.log("index => ", slide);
    setSlide(newIndex);
  };

  if (array_img) {
    return (
      <div className="carousel">
        <button onClick={() => updateIndex(slide - 1)} className="pointer">
          Avant
        </button>
        {array_img.map((item, index) => {
          return (
            <img
              src={item}
              alt="table_mariage"
              key={index}
              className={slide === index ? "slide" : "slide-hidden"}
            />
          );
        })}
        <button onClick={() => updateIndex(slide + 1)} className="pointer">
          Suivant
        </button>
      </div>
    );
  }
}

export default Carousel;
