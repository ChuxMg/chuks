import Button from "../Button";

interface ScheduleButtonProps {
  handleClick: () => void;
}

const ScheduleButton = ({ handleClick }: ScheduleButtonProps) => {
  return (
    <div className="flex items-center">
      <Button
        type="primary"
        classes="
          group
          relative
          overflow-hidden
          rounded-full
          border
          border-[var(--button-primary-border)]
          bg-[var(--button-primary-bg)]
          px-7
          py-3.5
          text-sm
          font-medium
          text-[var(--button-primary-text)]
          transition-all
          duration-300
          hover:border-[var(--button-primary-hover-border)]
          hover:bg-[var(--button-primary-hover-bg)]
        "
        onClick={handleClick}
      >
        <span className="flex items-center gap-3">
          Schedule a meeting
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </Button>
    </div>
  );
};

export default ScheduleButton;
