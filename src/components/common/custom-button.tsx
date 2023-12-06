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
        "py-4 px-6 rounded-lg text-lg " +
        (background ? "bg-purple text-white" : "transparent")
      }
    >
      {text}
    </button>
  );
};

export default CustomButton;
