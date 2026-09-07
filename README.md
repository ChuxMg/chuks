# Chuks Mgbojikwe — Developer Portfolio

A modern, responsive personal portfolio built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

The portfolio is designed to present my work, technical capabilities, services, professional background, and contact information through a clean, minimal interface with a refined dark/light visual system.

## Live Portfolio

**Portfolio:**  
https://chuks-mgbojikwe.vercel.app

---

## Overview

This project is my personal developer portfolio and professional online presence.

It showcases:

- Professional introduction
- Selected web and mobile projects
- Services and areas of expertise
- Technical skills
- Professional background
- About section
- Contact information
- Social profiles
- Resume/CV
- Responsive layouts for desktop, tablet, and mobile
- Dark and light themes

The portfolio was designed with a focus on **clarity, usability, responsive behavior, and visual personality** while avoiding the common template-like appearance of developer portfolios.

---

## Features

### Responsive Design

The portfolio is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

Layouts, typography, spacing, navigation, project cards, and content sections adapt to different screen sizes.

### Dark & Light Theme

The site supports both dark and light visual themes.

The theme system uses CSS variables so that colors remain consistent across the application.

The design system includes variables for:

- Primary background
- Secondary background
- Primary text
- Secondary text
- Muted text
- Accent colors
- Borders
- Buttons
- Soft surfaces

### Project Showcase

The Work section presents selected projects using a visual project-card system.

Projects can be represented as:

- Desktop/web applications
- Mobile applications

The project presentation uses device-oriented visual framing to make the distinction between web and mobile work clearer.

### Resume

The portfolio includes a dedicated `/resume` page.

The resume is designed as an A4-style professional document with a two-column layout.

#### Sidebar

- Profile photo
- Contact information
- Technical skills
- Licenses & certifications
- Language

#### Main Content

- Professional profile
- Professional experience
- Education
- Professional organizations

The resume also includes a print-friendly **Download PDF** action using the browser's print functionality.

### Services

The Services section communicates the areas in which I can contribute, including:

- Frontend Engineering
- Web & Mobile Development
- Product & Interface Design
- Backend & API Integration

### Technical Skills

The portfolio presents technical capabilities across several areas.

#### Frontend Development

- HTML
- CSS
- JavaScript (ES6+)
- TypeScript
- React
- React Native
- Expo
- Next.js
- Vue.js
- Remix.js
- jQuery
- EJS
- Shadcn UI

#### Backend Development

- Node.js
- Express.js
- REST API
- Socket.IO
- OpenAI API

#### Database & ORM

- PostgreSQL
- MongoDB
- Neon
- Prisma

#### Design & Prototyping

- Figma

#### Version Control

- Git
- GitHub

---

# Technology Stack

## Frontend

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Styling

- Tailwind CSS
- Custom CSS
- CSS variables
- Responsive utility classes

## Animation & Interaction

- GSAP
- CSS transitions
- CSS transforms
- Hover interactions
- Responsive navigation interactions

## Theme

- `next-themes`

## Development Tools

- Node.js
- npm
- Git
- GitHub
- VS Code

## Deployment

- Vercel

---

# Project Structure

The project follows the Next.js Pages Router architecture.

```text
.
├── components/
│   ├── Button/
│   ├── Footer/
│   ├── Header/
│   ├── ScheduleButton/
│   ├── ScheduleMeeting/
│   ├── Socials/
│   ├── WorkCard/
│   └── ...
│
├── data/
│   └── portfolio.json
│
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
│   ├── resume.tsx
│   └── ...
│
├── public/
│   ├── images/
│   └── ...
│
├── styles/
│   ├── globals.css
│   └── markdown.css
│
├── types/
│   └── ...
│
├── utils/
│   └── ...
│
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
