import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";


// Local Data
import data from "../data/portfolio.json";
import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const skillsRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const formatedLanguages = data.resume.languages.join(", ");

  const formatedFrameworks = data.resume.frameworks.join(", ");

  const formatedOthers = data.resume.others.join(", ");

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
        />
        <section className="relative flex min-h-[70vh] flex-col justify-center pt-16 laptop:min-h-[78vh]">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="font-display text-4xl font-medium tracking-tight tablet:text-6xl laptop:text-7xl laptopl:text-8xl"
            >
              {data.headerTaglineOne}
            </h1>

            <h1
              ref={textTwo}
              className="gradient-text font-display text-4xl font-medium tracking-tight tablet:text-6xl laptop:text-7xl laptopl:text-8xl"
            >
              {data.headerTaglineTwo}
            </h1>

            <h1
              ref={textThree}
              className="font-display text-4xl font-medium tracking-tight tablet:text-6xl laptop:text-7xl laptopl:text-8xl"
            >
              {data.headerTaglineThree}
            </h1>

            <h1
              ref={textFour}
              className="font-display text-4xl font-medium tracking-tight tablet:text-6xl laptop:text-7xl laptopl:text-8xl"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          {/* <Socials className="mt-2 laptop:mt-5" /> */}
          <SocialMediaIcons size="30" />
        </section>

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>

        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}

        {/* {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )} */}

        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0" ref={skillsRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Skills.</h1>
          <div className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            <ServiceCard name="Languages" description={formatedLanguages} />
            <ServiceCard name="Frameworks" description={formatedFrameworks} />
            <ServiceCard name="Others" description={formatedOthers} />
          </div>
        </div>

        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
