import starIcon from "../../../../assets/icons/star.svg";

interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  return (
    <div className="flex gap-2">
      {[...Array(rating)].map((_, index) => (
        <span key={index}>
          <img src={starIcon} alt="star" />
        </span>
      ))}
    </div>
  );
}

export default Rating;
