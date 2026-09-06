import Head from "next/head";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import data from "../data/portfolio.json";

interface Certification {
  provider: string;
  type: string;
  title: string;
  year: string;
}

interface Experience {
  id: string;
  dates: string;
  type: string;
  position: string;
  company: string;
  location: string;
  workMode: string;
  bullets: string[];
}

interface Language {
  name: string;
  proficiency: string;
}

interface Organization {
  title: string;
  organization: string;
  abbreviation: string;
}

interface ResumeData {
  tagline: string;
  description: string;
  contact: {
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  technicalSkills: Record<string, string[]>;
  certifications: Certification[];
  languages: Language[];
  experiences: Experience[];
  education: {
    universityName: string;
    universityLocation: string;
    universityDate: string;
    degree: string;
    field: string;
  };
  organizations: Organization[];
}

const resume = data.resume as ResumeData;

const Resume = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!mounted) {
    return null;
  }

  const isLight = resolvedTheme === "light";

  return (
    <>
      <Head>
        <title>
          {data.name} {data.lName} — Resume
        </title>

        <meta
          name="description"
          content={`${data.name} ${data.lName} — ${resume.tagline}`}
        />
      </Head>

      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {/* =========================================================
            WEBSITE HEADER
        ========================================================= */}
        <div className="print:hidden">
          <div className="site-container">
            <Header
              isBlog
              handleWorkScroll={() => {}}
              handleAboutScroll={() => {}}
              handleContactScroll={() => {}}
            />
          </div>
        </div>

        {/* =========================================================
            RESUME TOOLBAR
        ========================================================= */}
        <div className="print:hidden">
          <div className="site-container">
            <div className="flex flex-col gap-5 border-b border-[var(--border-subtle)] py-6 tablet:flex-row tablet:items-center tablet:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  Resume
                </p>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Professional profile & experience
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="rounded-full border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                >
                  Back to site
                </Link>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="rounded-full border border-[var(--border-strong)] bg-[var(--button-primary-bg)] px-5 py-2 text-sm font-medium text-[var(--button-primary-text)] transition-all hover:scale-[1.02]"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            RESUME DOCUMENT
        ========================================================= */}
        <main className="site-container py-8 tablet:py-12 laptop:py-16 print:p-0">
          {/* Added explicit font-sans and crisp text rendering overrides directly to the root document wrapper */}
          <article className="resume-document">
            {/* =====================================================
  LEFT SIDEBAR
  ===================================================== */}
            <aside
              className="resume-sidebar"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              {/* Profile Photo Wrapper */}
              <div className="resume-photo">
                <img
                  src="/images/chux-profile-photo.png"
                  alt={`${data.name} ${data.lName}`}
                />
              </div>

              {/* Contact Section */}
              <ResumeSidebarSection title="Contact">
                <div className="resume-contact-list">
                  <p
                    className="resume-language"
                    style={{
                      color: "rgba(255, 255, 255, 0.92)",
                      fontSize: "12px",
                      marginBottom: "4px",
                    }}
                  >
                    {resume.contact.location}
                  </p>
                  <a
                    href={`tel:${resume.contact.phone.replace(/\s/g, "")}`}
                    className="resume-contact-link"
                  >
                    {resume.contact.phone}
                  </a>
                  <a
                    href={`mailto:${resume.contact.email}`}
                    className="resume-contact-link"
                  >
                    {resume.contact.email}
                  </a>
                  <a
                    href={resume.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="resume-contact-link"
                  >
                    linkedin.com/in/chuks-mgbojikwe
                  </a>
                  <a
                    href={resume.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="resume-contact-link"
                  >
                    github.com/ChuxMg
                  </a>
                </div>
              </ResumeSidebarSection>

              {/* Technical Skills Section */}
              <ResumeSidebarSection title="Technical Skills">
                {Object.entries(resume.technicalSkills).map(
                  ([category, skills]) => (
                    <div key={category} className="resume-skill-group">
                      <h3 style={{ textTransform: "none", fontWeight: 700 }}>
                        {category}
                      </h3>
                      <p>{skills.join(", ")}</p>
                    </div>
                  ),
                )}
              </ResumeSidebarSection>

              {/* Certifications Section */}
              <ResumeSidebarSection title="Licenses & Certifications">
                <div className="resume-skill-group">
                  <h3
                    style={{
                      textTransform: "none",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    Udemy - Certificate of Completion
                  </h3>
                  <ul
                    className="resume-certifications"
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "16px",
                      margin: 0,
                    }}
                  >
                    {resume.certifications.map((certification) => (
                      <li
                        key={`${certification.title}-${certification.year}`}
                        style={{
                          color: "rgba(255, 255, 255, 0.92)",
                          fontSize: "11px",
                          lineHeight:
                            "1.45" /* FIXED: Changed from line-height to camelCase lineHeight */,
                          marginBottom: "9px",
                        }}
                      >
                        {certification.title}, {certification.year}
                      </li>
                    ))}
                  </ul>
                </div>
              </ResumeSidebarSection>

              {/* Language Section */}
              <ResumeSidebarSection title="Language">
                {resume.languages.map((language) => (
                  <p
                    key={language.name}
                    className="resume-language"
                    style={{ marginTop: "4px" }}
                  >
                    <span style={{ fontWeight: 700, color: "#ffffff" }}>
                      {language.name},
                    </span>{" "}
                    <span>{language.proficiency}</span>
                  </p>
                ))}
              </ResumeSidebarSection>
            </aside>

            {/* =====================================================
  RIGHT / MAIN CONTENT
  ===================================================== */}
            <section
              className="resume-content"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              {/* Header */}
              <header className="resume-header">
                <h1
                  style={{
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#303744",
                    textTransform: "none",
                  }}
                >
                  {data.name} {data.lName}
                </h1>
                <p
                  className="resume-role"
                  style={{
                    fontWeight: 500,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#3d4653",
                  }}
                >
                  {resume.tagline}
                </p>
                <p
                  className="resume-summary"
                  style={{ textAlign: "justify", color: "#424242" }}
                >
                  {resume.description}
                </p>
              </header>

              {/* Professional Experience Section */}
              <section className="resume-main-section">
                <h2
                  className="resume-main-title"
                  style={{
                    fontWeight: 700,
                    color: "#303744",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Professional Experience
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: "12px",
                  }}
                >
                  {resume.experiences.map((experience) => (
                    <div key={experience.id} className="resume-experience">
                      <div className="resume-experience-heading">
                        <h3>
                          <span style={{ fontWeight: 700, color: "#303030" }}>
                            {experience.position}
                          </span>
                          {experience.type && (
                            <span style={{ fontWeight: 400 }}>
                              {" "}
                              ({experience.type})
                            </span>
                          )}
                          <br />
                          <span style={{ fontWeight: 700, color: "#555555" }}>
                            {experience.company}
                          </span>
                          {experience.location && (
                            <span style={{ fontWeight: 400, color: "#555555" }}>
                              {" "}
                              — {experience.location}
                            </span>
                          )}
                          {experience.workMode && (
                            <span style={{ fontWeight: 400, color: "#555555" }}>
                              {" "}
                              — ({experience.workMode})
                            </span>
                          )}
                        </h3>
                        <p style={{ fontWeight: 500, color: "#555555" }}>
                          {experience.dates}
                        </p>
                      </div>
                      <ul
                        className="resume-experience-list"
                        style={{
                          paddingLeft: "17px",
                          listStyleType: "disc",
                          margin: "8px 0 0 0",
                        }}
                      >
                        {experience.bullets.map((bullet, index) => (
                          <li
                            key={`${experience.id}-${index}`}
                            style={{
                              color: "#424242",
                              marginBottom: "5px",
                              fontSize: "11px",
                              lineHeight: "1.45",
                            }}
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education Section */}
              <section className="resume-main-section resume-education">
                <h2
                  className="resume-main-title"
                  style={{
                    fontWeight: 700,
                    color: "#303744",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Education
                </h2>
                <div
                  className="resume-experience-heading"
                  style={{ marginBottom: "4px", marginTop: "12px" }}
                >
                  <h3>
                    <span style={{ fontWeight: 700, color: "#303030" }}>
                      {resume.education.universityName}
                    </span>
                    <span style={{ fontWeight: 400, color: "#555555" }}>
                      {" "}
                      — {resume.education.universityLocation}
                    </span>
                  </h3>
                  <p style={{ fontWeight: 500, color: "#555555" }}>
                    {resume.education.universityDate}
                  </p>
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "#424242",
                    fontSize: "11px",
                    lineHeight: "1.45",
                  }}
                >
                  {resume.education.degree} in {resume.education.field}
                </p>
              </section>

              {/* Professional Organizations Section */}
              <section className="resume-main-section resume-organization">
                <h2
                  className="resume-main-title"
                  style={{
                    fontWeight: 700,
                    color: "#303744",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Professional Organizations
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    marginTop: "12px",
                  }}
                >
                  {resume.organizations.map((organization) => (
                    <p
                      key={organization.organization}
                      className="resume-organization p"
                      style={{ margin: 0, color: "#424242" }}
                    >
                      <span style={{ fontWeight: 700, color: "#303030" }}>
                        {organization.title},
                      </span>{" "}
                      {organization.organization} ({organization.abbreviation})
                    </p>
                  ))}
                </div>
              </section>
            </section>
          </article>
        </main>
      </div>
    </>
  );
};

/* =========================================================
   SIDEBAR SECTION
========================================================= */

interface ResumeSidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const ResumeSidebarSection = ({
  title,
  children,
}: ResumeSidebarSectionProps) => (
  <section className="mt-7 border-t border-white/70 pt-4">
    <h2 className="text-[16px] font-bold uppercase leading-5 tracking-[0.01em] text-white">
      {title}
    </h2>

    <div className="mt-3">{children}</div>
  </section>
);

/* =========================================================
   MAIN SECTION TITLE
========================================================= */

interface ResumeMainSectionTitleProps {
  children: React.ReactNode;
}

const ResumeMainSectionTitle = ({ children }: ResumeMainSectionTitleProps) => (
  <h2 className="text-[17px] font-bold uppercase leading-5 text-[#343943]">
    {children}
  </h2>
);

export default Resume;
