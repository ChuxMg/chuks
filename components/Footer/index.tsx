import Link from "next/link";
import Socials from "../Socials";
import ScheduleMeeting from "../ScheduleMeeting";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 px-2 laptop:mt-56 laptop:px-0">
      {/* Contact / CTA */}
      <div className="border-t border-[var(--border-subtle)] pt-12 transition-colors duration-300 tablet:pt-16 laptop:pt-24">
        <div className="grid grid-cols-1 gap-12 laptop:grid-cols-[0.7fr_0.3fr] laptop:gap-20">
          {/* Main message */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--border-strong)]" />

              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Get in touch
              </p>
            </div>

            <h2 className="mt-8 max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.035em] text-[var(--text-primary)] transition-colors duration-300 tablet:text-6xl laptop:text-7xl laptopl:text-[7rem]">
              Let's build
              <br />
              something meaningful.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[var(--text-secondary)] transition-colors duration-300 laptop:text-base">
              Have an idea, a product, or a problem you'd like to solve? I'm
              open to thoughtful conversations, interesting collaborations, and
              opportunities to build useful digital experiences.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-end laptop:items-start">
            <div className="max-w-xs">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
                Start a conversation
              </p>

              <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                Tell me what you're working on and let's see where we can take
                it.
              </p>

              <div className="mt-6">
                <ScheduleMeeting />
              </div>
            </div>
          </div>
        </div>

        {/* Contact links */}
        <div className="mt-16 border-t border-[var(--border-subtle)] pt-8 laptop:mt-24">
          <div className="flex flex-col gap-8 laptop:flex-row laptop:items-center laptop:justify-between">
            <Socials />

            <a
              href="mailto:chuxmgbojikwe@gmail.com"
              className="group inline-flex items-center gap-3 text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)]"
            >
              <span>chuxmgbojikwe@gmail.com</span>

              <span className="text-[var(--text-muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--text-primary)]">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer metadata */}
      <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border-subtle)] py-6 text-xs text-[var(--text-muted)] transition-colors duration-300 tablet:flex-row tablet:items-center tablet:justify-between">
        <p>© {currentYear} Chuks Mgbojikwe. All rights reserved.</p>

        <Link
          href="/"
          className="w-fit text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)]"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
