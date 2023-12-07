import profileImg from "../../../../assets/images/profile-img.png";
import Rating from "./rating";

function Review() {
  return (
    <div className="flex gap-4">
      <div className="w-[100px] max-w-[100px]">
        <img src={profileImg} alt="profile" className="w-full" />
      </div>
      <div className="">
        <div>
          <Rating rating={5} />
        </div>
        <p className="mt-4 lg:text-lg text-secondaryFont">
          “Meavitae transformed my paperwork approach, bringing organisation and
          stress-free document management into my life”
        </p>
      </div>
    </div>
  );
}

export default Review;
