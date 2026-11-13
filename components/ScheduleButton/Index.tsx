interface ScheduleButtonProps {
  handleClick: () => void;
}

const ScheduleButton = ({ handleClick }: ScheduleButtonProps) => {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="group inline-flex items-center justify-center rounded-full border border-[var(--button-primary-border)] bg-[var(--button-primary-bg)] px-6 py-3 text-sm font-medium text-[var(--button-primary-text)] shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--button-primary-hover-border)] hover:bg-[var(--button-primary-hover-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-primary)]"
        onClick={handleClick}
      >
        <span className="flex items-center gap-3">
          <span>Schedule a meeting</span>

          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-current/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <span className="text-sm leading-none">↗</span>
          </span>
        </span>
      </button>
    </div>
  );
};

export default ScheduleButton;
