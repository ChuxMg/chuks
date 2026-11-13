import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Local Data
import data from "../data/portfolio.json";
import SocialMediaIcons from "../components/SocialMediaIcons";

type ProjectType = "desktop" | "mobile";

export default function Home() {
  // Ref
  const workRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const textOne = useRef<HTMLHeadingElement | null>(null);

  // Handling Scroll
  const handleWorkScroll = () => {
    if (!workRef.current) return;

    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    if (!aboutRef.current) return;

    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    if (!contactRef.current) return;

    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleServicesScroll = () => {
    if (!servicesRef.current) return;

    window.scrollTo({
      top: servicesRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSkillsScroll = () => {
    if (!skillsRef.current) return;

    window.scrollTo({
      top: skillsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);


  return (
    <div className="relative">
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="site-background"></div>

      <div className="site-grid"></div>

      <div className="gradient-orb gradient-orb--top"></div>
      <div className="gradient-orb gradient-orb--bottom"></div>

      <div className="site-container">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
          handleServicesScroll={handleServicesScroll}
          handleSkillsScroll={handleSkillsScroll}
        />
        <section className="relative mx-auto grid min-h-[80vh] w-full max-w-7xl items-center gap-14 overflow-hidden px-4 pb-20 pt-20 tablet:px-8 laptop:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] laptop:gap-16 laptop:pb-16 laptop:pt-12">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] theme-muted tablet:text-sm">
              Frontend Developer · Creative Technologist
            </p>

            <h1
              ref={textOne}
              className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.045em] tablet:text-6xl laptop:text-6xl laptopl:text-7xl"
            >
              I build thoughtful{" "}
              <span className="gradient-text">digital products</span> for web
              and mobile.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 theme-secondary tablet:text-lg tablet:leading-8">
              I&apos;m Chuks Mgbojikwe, a frontend developer based in Abuja. I
              create responsive interfaces that combine clear design, reliable
              engineering, and purposeful interaction.
            </p>

            <div className="mt-9 flex flex-col gap-3 mob:flex-row mob:items-center">
              <button
                type="button"
                onClick={handleWorkScroll}
                className="rounded-full border border-[var(--button-primary-border)] bg-[var(--button-primary-bg)] px-6 py-3 text-sm font-medium text-[var(--button-primary-text)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover-bg)] hover:border-[var(--button-primary-hover-border)]"
              >
                View selected work
              </button>
              <Link
                href="/resume"
                className="rounded-full border border-[var(--border-strong)] px-6 py-3 text-center text-sm font-medium theme-primary transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface-soft)]"
              >
                View résumé <span aria-hidden="true"></span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] theme-muted">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for selected work
              </span>
              <span>Abuja, Nigeria · GMT+1</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px] laptop:justify-self-end">
            <div className="absolute -inset-10 rounded-full bg-[var(--accent-primary)] opacity-[0.12] blur-3xl" />
            <div className="group relative overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-2 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.7)]">
              <div className="relative aspect-square overflow-hidden rounded-[1.55rem] bg-[var(--surface-soft)]">
                <Image
                  src={`/${data.heroImage}`}
                  alt="Portrait of Chuks Mgbojikwe"
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 55vw, 90vw"
                  className="object-cover object-top grayscale-[15%] transition duration-700 ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                      Focus
                    </p>
                    <p className="mt-1 text-sm font-medium tablet:text-base">
                      Frontend Engineering · Product UI
                    </p>
                  </div>
                  <span className="hidden rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs backdrop-blur-sm mob:inline-flex">
                    React · TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Work Section */}

        <section className="mt-12 px-2 laptop:mt-20 laptop:px-0" ref={workRef}>
          <div className="flex flex-col gap-6 laptop:flex-row laptop:items-end laptop:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] theme-muted">
                Selected Work
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-tight tablet:text-5xl laptop:text-6xl">
                Things I&apos;ve built
                <br />
                along the way.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 theme-secondary laptop:text-base">
              A selection of web and mobile experiences I&apos;ve designed and
              developed, from product interfaces to practical applications.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-16 tablet:grid-cols-2 laptop:mt-24 laptop:gap-x-8 laptop:gap-y-24">
            {data.projects.map((project, index) => (
              <WorkCard
                key={project.id}
                index={index + 1}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                type={project.type as ProjectType}
                onClick={() => window.open(project.url, "_blank")}
              />
            ))}
          </div>
        </section>

        {/* About Section */}

        <section ref={aboutRef} className="mt-32 px-2 laptop:mt-56 laptop:px-0">
          <div className="grid grid-cols-1 gap-12 laptop:grid-cols-[0.35fr_0.65fr] laptop:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] theme-muted">
                About
              </p>

              <p className="mt-4 max-w-xs text-sm leading-6 theme-muted">
                How I approach the work
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight">
                I build with curiosity, clarity, and purpose.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 theme-secondary laptop:text-lg">
                {data.aboutpara}
              </p>

              <div className="mt-12 grid grid-cols-1 gap-0 border-t theme-border tablet:grid-cols-3">
                <div className="border-b theme-border py-8 tablet:border-b-0 tablet:border-r tablet:pr-8">
                  <p className="text-xs uppercase tracking-[0.2em] theme-muted">
                    Approach
                  </p>

                  <p className="mt-3 text-sm leading-6 theme-secondary">
                    Analytical, detail-oriented, and focused on using time
                    effectively to deliver quality work.
                  </p>
                </div>

                <div className="border-b theme-border py-8 tablet:border-b-0 tablet:px-8 tablet:border-r">
                  <p className="text-xs uppercase tracking-[0.2em] theme-muted">
                    Collaboration
                  </p>

                  <p className="mt-3 text-sm leading-6 theme-secondary">
                    Comfortable working with international teams as well as
                    independently in focused environments.
                  </p>
                </div>

                <div className="py-8 tablet:pl-8">
                  <p className="text-xs uppercase tracking-[0.2em] theme-muted">
                    Mindset
                  </p>

                  <p className="mt-3 text-sm leading-6 theme-secondary">
                    Always learning, adapting, and looking for better ways to
                    turn ideas into useful digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}

        <section
          className="mt-32 px-2 laptop:mt-56 laptop:px-0"
          ref={servicesRef}
        >
          <div className="grid grid-cols-1 gap-12 laptop:grid-cols-[0.35fr_0.65fr] laptop:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] theme-muted">
                Capabilities
              </p>

              <p className="mt-4 max-w-xs text-sm leading-6 theme-muted">
                From interface design to the engineering behind the experience.
              </p>
            </div>

            <div>
              <div className="divide-y theme-border border-y">
                {/* Service 01 */}
                <div className="group py-8 laptop:py-10">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <p className="mb-3 text-xs tracking-[0.2em] theme-muted">
                        01
                      </p>

                      <h2 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 tablet:text-3xl laptop:text-4xl">
                        Frontend Engineering
                      </h2>

                      <p className="mt-4 max-w-2xl text-sm leading-7 theme-secondary laptop:text-base">
                        Building responsive, scalable interfaces with React,
                        Next.js, and TypeScript, with a focus on clean
                        architecture, usability, and maintainable code.
                      </p>
                    </div>

                    <span className="hidden text-xl theme-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 tablet:block">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Service 02 */}
                <div className="group py-8 laptop:py-10">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <p className="mb-3 text-xs tracking-[0.2em] theme-muted">
                        02
                      </p>

                      <h2 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 tablet:text-3xl laptop:text-4xl">
                        Web & Mobile Development
                      </h2>

                      <p className="mt-4 max-w-2xl text-sm leading-7 theme-secondary laptop:text-base">
                        Creating practical digital products across web and
                        mobile, using React and React Native to deliver
                        consistent, user-focused experiences.
                      </p>
                    </div>

                    <span className="hidden text-xl theme-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 tablet:block">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Service 03 */}
                <div className="group py-8 laptop:py-10">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <p className="mb-3 text-xs tracking-[0.2em] theme-muted">
                        03
                      </p>

                      <h2 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 tablet:text-3xl laptop:text-4xl">
                        Product & Interface Design
                      </h2>

                      <p className="mt-4 max-w-2xl text-sm leading-7 theme-secondary laptop:text-base">
                        Translating ideas into clear, intuitive interfaces with
                        attention to visual hierarchy, interaction,
                        responsiveness, and the overall user experience.
                      </p>
                    </div>

                    <span className="hidden text-xl theme-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 tablet:block">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Service 04 */}
                <div className="group py-8 laptop:py-10">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <p className="mb-3 text-xs tracking-[0.2em] theme-muted">
                        04
                      </p>

                      <h2 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 tablet:text-3xl laptop:text-4xl">
                        Backend & API Integration
                      </h2>

                      <p className="mt-4 max-w-2xl text-sm leading-7 theme-secondary laptop:text-base">
                        Connecting interfaces to reliable application logic,
                        databases, and APIs using technologies including
                        Node.js, Express.js, PostgreSQL, MongoDB, and Prisma.
                      </p>
                    </div>

                    <span className="hidden text-xl theme-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 tablet:block">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* This button should not go into production */}

        {/* {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )} */}

        {/* Skills Section */}

        <section
          className="mt-32 px-2 laptop:mt-56 laptop:px-0"
          ref={skillsRef}
        >
          <div className="mb-16 laptop:mb-24">
            <p className="text-xs uppercase tracking-[0.3em] theme-muted">
              Technical Toolkit
            </p>

            <div className="mt-5 flex flex-col gap-6 laptop:flex-row laptop:items-end laptop:justify-between">
              <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight tablet:text-5xl laptop:text-6xl">
                The tools I use to turn ideas into
                <span className="gradient-text">
                  {" "}
                  reliable digital products.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-6 theme-secondary laptop:text-base">
                A practical stack shaped by frontend engineering, product
                development, and a focus on creating thoughtful user
                experiences.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 laptop:grid-cols-3">
            {[
              {
                number: "01",
                title: "Frontend",
                description:
                  "Building responsive interfaces and interactive experiences for web and mobile.",
                skills: data.skills.frontend,
              },
              {
                number: "02",
                title: "Backend & Data",
                description:
                  "Working with APIs, services, databases, and the infrastructure behind digital products.",
                skills: data.skills.backend,
              },
              {
                number: "03",
                title: "Tools & Design",
                description:
                  "The tools I use to design, collaborate, version, and bring ideas into production.",
                skills: data.skills.tools,
              },
            ].map((category) => (
              <div
                key={category.number}
                className="group rounded-2xl border theme-border bg-[var(--bg-secondary)] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--bg-secondary)] laptop:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] theme-muted">
                    {category.number}
                  </span>

                  <span className="h-px w-12 bg-[var(--border-subtle)] transition-all duration-300 group-hover:w-20" />
                </div>

                <h3 className="mt-12 text-2xl font-medium tracking-tight">
                  {category.title}
                </h3>

                <p className="mt-4 min-h-[72px] text-sm leading-6 theme-secondary">
                  {category.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border theme-border px-3 py-1.5 text-xs theme-secondary transition-colors duration-300 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
