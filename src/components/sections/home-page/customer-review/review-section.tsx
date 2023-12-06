import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../../../../data/reviews";

export function ReviewSection() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className="px-24 py-16 flex flex-col mt-16 gap-8 bg-lightGray ">
      <h1 className="text-5xl font-bold text-center">Customer Reviews</h1>
      <div className="mt-24">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="">
              <p className="text-2xl text-center mx-auto w-[80%]">
                {review.description}
              </p>
              <h1 className="my-10 text-center">{review.name}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


