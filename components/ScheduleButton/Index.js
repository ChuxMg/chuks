import Button from "../Button";

const ScheduleButton = ({ handleClick }) => {
  return (
    <div className="flex items-center">
      <Button
        classes={"bg-blue-500 px-6 py-3 text-white"}
        onClick={handleClick}
      >
        Schedule Meeting
      </Button>
    </div>
  );
};

export default ScheduleButton;
