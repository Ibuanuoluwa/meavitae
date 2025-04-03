interface ProfileImageProps {
  profileImg?: string;
  name?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ profileImg, name }) => {
  return (
    <div className="p-[1px] bg-white rounded-full h-full w-full">
      {profileImg ? (
        <img
          src={profileImg}
          alt="profile"
          className="h-full w-full rounded-full"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center rounded-full bg-[#D9D9D9] text-xs font-semibold">
          {name?.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
