type ButtonProp = {
  eventFunc?: () => void;
  background: boolean;
  text: string;
};

const CustomButton: React.FC<ButtonProp> = ({
  eventFunc,
  background,
  text,
}) => {
  return (
    <button
      onClick={eventFunc}
      className={
        "py-2 px-4 lg:py-3 lg:px-5 rounded-lg lg:text-lg  " +
        (background ? "bg-purple text-white" : "transparent")
      }
    >
      {text}
    </button>
  );
};

export default CustomButton;
