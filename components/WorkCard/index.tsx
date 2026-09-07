import React from "react";
import Image from "next/image";

interface WorkCardProps {
  index: number;
  img: string;
  name?: string;
  description?: string;
  type?: "desktop" | "mobile";
  onClick?: () => void;
}

const WorkCard: React.FC<WorkCardProps> = ({
  index,
  img,
  name,
  description,
  type = "desktop",
  onClick,
}) => {
  const isMobile = type === "mobile";

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (onClick && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className={`group ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      {/* Device presentation */}
      <div
        className={`relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-soft)] p-6 transition-colors duration-500 tablet:min-h-[420px] laptop:p-10 ${
          isMobile ? "laptop:min-h-[520px]" : ""
        }`}
      >
        {isMobile ? (
          /* Mobile device */
          <div className="relative w-[170px] transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-[-1deg] tablet:w-[210px] laptop:w-[230px]">
            {/* Phone body */}
            <div className="relative rounded-[2.5rem] border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.28)] transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
              {/* Camera / speaker area */}
              <div className="absolute left-1/2 top-2 z-10 h-5 w-16 -translate-x-1/2 rounded-full bg-black" />

              {/* Screen */}
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-black">
                <Image
                  src={`/${img}`}
                  alt={name || "Mobile project"}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/30" />
            </div>

            {/* Phone glow */}
            <div className="pointer-events-none absolute inset-8 -z-10 rounded-full bg-[var(--accent-primary)] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20" />
          </div>
        ) : (
          /* Desktop / browser device */
          <div className="relative w-full max-w-4xl transition-all duration-700 ease-out group-hover:-translate-y-2">
            <div className="overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--bg-secondary)] shadow-[0_30px_80px_rgba(0,0,0,0.28)] transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
              {/* Browser chrome */}
              <div className="flex h-9 items-center gap-1.5 border-b border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4">
                <span className="h-2.5 w-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--text-muted)]/40" />
                <span className="h-2.5 w-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--text-muted)]/40" />
                <span className="h-2.5 w-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--text-muted)]/40" />

                <div className="ml-4 h-5 flex-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40" />
              </div>

              {/* Browser viewport */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={`/${img}`}
                  alt={name || "Web project"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Project number */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)]/70 text-xs text-[var(--text-secondary)] backdrop-blur-md transition-colors duration-300">
          {String(index).padStart(2, "0")}
        </div>

        {/* View indicator */}
        <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-x-2 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)]/70 text-[var(--text-primary)] opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
          ↗
        </div>
      </div>

      {/* Project information */}
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl font-medium tracking-tight tablet:text-3xl">
            {name || "Project Name"}
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.18em] theme-muted">
            {description || "Project"}
          </p>
        </div>

        <span className="mt-1 text-sm theme-muted transition-colors duration-300 group-hover:text-[var(--text-primary)]">
          View
        </span>
      </div>
    </article>
  );
};

export default WorkCard;
