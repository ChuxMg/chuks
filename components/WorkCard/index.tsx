import Image from "next/image";

interface WorkCardProps {
  img: string;
  name?: string;
  description?: string;
  summary?: string;
  technologies?: string[];
  type?: "desktop" | "mobile";
  url: string;
}

const WorkCard = ({
  img,
  name,
  description,
  summary,
  technologies = [],
  type = "desktop",
  url,
}: WorkCardProps) => {
  const isMobile = type === "mobile";

  return (
    <article className="group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] transition duration-500 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_28px_80px_-40px_rgba(0,0,0,0.75)]">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-5 py-4 tablet:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] theme-secondary">
            {description || "Project"}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group/view flex items-center gap-2 rounded-sm text-xs font-medium theme-secondary transition-colors duration-300 hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-secondary)]"
            aria-label={`View ${name || "project"} in a new tab`}
          >
            View project
            <span
              aria-hidden="true"
              className="text-base transition-transform duration-300 group-hover/view:translate-x-0.5 group-hover/view:-translate-y-0.5"
            >
              ↗
            </span>
          </a>
        </div>

        <div
          className={`relative flex items-center justify-center overflow-hidden bg-[var(--surface-soft)] px-6 py-8 tablet:px-8 tablet:py-10 ${
            isMobile ? "min-h-[380px] tablet:min-h-[430px]" : "min-h-[300px] tablet:min-h-[360px]"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(167,139,250,0.12),transparent_45%)] opacity-70" />

          {isMobile ? (
            <div className="relative w-[158px] transition duration-700 ease-out group-hover:-translate-y-1.5 tablet:w-[188px]">
              <div className="relative rounded-[2.35rem] border border-[var(--border-strong)] bg-black p-2 shadow-[0_26px_65px_rgba(0,0,0,0.38)]">
                <div className="absolute left-1/2 top-2 z-10 h-5 w-16 -translate-x-1/2 rounded-full bg-black" />
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.9rem] bg-black">
                  <Image
                    src={`/${img}`}
                    alt={name || "Mobile project"}
                    fill
                    sizes="(max-width: 768px) 45vw, 188px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="absolute bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/40" />
              </div>
            </div>
          ) : (
            <div className="relative w-full max-w-3xl transition duration-700 ease-out group-hover:-translate-y-1.5">
              <div className="overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--bg-primary)] shadow-[0_26px_65px_rgba(0,0,0,0.32)]">
                <div className="flex h-9 items-center gap-1.5 border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]/60" />
                  <div className="ml-4 h-5 flex-1 rounded-md border border-[var(--border-subtle)] bg-[var(--surface-soft)]" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={`/${img}`}
                    alt={name || "Web project"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col border-t border-[var(--border-subtle)] p-6 tablet:p-7">
          <h3 className="text-2xl font-medium tracking-tight theme-primary tablet:text-3xl">
            {name || "Project Name"}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 theme-secondary tablet:text-base tablet:leading-7">
            {summary || "A selected project from my portfolio."}
          </p>

          {technologies.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies and capabilities">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-medium theme-secondary transition-colors duration-300 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

export default WorkCard;
