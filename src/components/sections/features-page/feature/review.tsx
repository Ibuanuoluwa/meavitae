
import Rating from "./rating";

interface reviewTextProps {
  reviewText: string;
  reviewerImg: string;
}

function Review({ reviewText, reviewerImg }: reviewTextProps) {
  return (
    <div className="flex gap-4">
      <div className="w-[100px] max-w-[100px]">
        <img src={reviewerImg} alt="profile" className="w-full" />
      </div>
      <div className="">
        <div>
          <Rating rating={5} />
        </div>
        <p className="mt-4 lg:text-lg text-secondaryFont">{reviewText}</p>
      </div>
    </div>
  );
}

export default Review;
