import Button from "../Button";

interface ScheduleButtonProps {
  handleClick: () => void;
}

const ScheduleButton = ({ handleClick }: ScheduleButtonProps) => {
  return (
    <div className="flex items-center">
      <Button
        type="primary"
        classes="group relative overflow-hidden rounded-full border border-[var(--button-primary-border)] bg-[var(--button-primary-bg)] px-5 py-2.5 text-sm font-medium text-[var(--button-primary-text)] transition-all duration-500 hover:px-6 hover:border-[var(--button-primary-hover-border)] hover:bg-[var(--button-primary-hover-bg)]"
        onClick={handleClick}
      >
        <span className="relative flex items-center gap-3">
          <span>Schedule a meeting</span>

          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current/15 transition-all duration-500 group-hover:translate-x-0.5 group-hover:rotate-[-45deg]">
            <span className="text-sm leading-none">↗</span>
          </span>
        </span>
      </Button>
    </div>
  );
};

export default ScheduleButton;
