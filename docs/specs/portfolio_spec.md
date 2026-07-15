# Technical Specification Document: Developer Portfolio - Truong Van Duan

This document outlines the technical requirements, design guidelines, and system architecture for the personal portfolio website of **Truong Van Duan**, Backend Developer.

---

## 1. Project Goal
The portfolio is designed to showcase Truong Van Duan's professional competence, work history, and key projects to recruiters and prospective partners.
The website highlights:
- Professional Backend development capabilities (API design, high-performance database optimization).
- Automation solutions, backend performance optimization, and AI Agent integrations to streamline business operations.
- App deployment skills (Docker, VPS, PM2, Cloudflare).
- Practical work experience at Wintech (EPOSVN project) and NHPTECH (hydropower reservoir early warning system).
- Personal project: **Nga Son Plus** (digital map and local community service platform).
- Clean code practices, responsive UI, and premium design aesthetics.

---

## 2. Requirements & Content Sections

### 2.0 About Me (Bio)
- **Professional Summaries**:
  - *"With practical experience in building specialized backend business logic, designing, and optimizing databases, I aim to create well-structured, secure, and high-performance software products."*
  - *"I love solving automation challenges, optimizing backend performance, and implementing AI Agents to bring intelligence and efficiency to real-world business operations."*
- **Quick Info**:
  - Role: Backend Developer
  - Location: Hanoi, Vietnam
  - Mindset: Lean - Efficient - Optimized

### 2.1 Skills Grid Showcase
The portfolio groups and showcases technical skills in 5 glassmorphic cards:
- **Backend & APIs (Core)**: Node.js (Employee at NHPTech), Laravel (Intern at Wintech), REST APIs, WebSocket, RabbitMQ.
- **Databases**: PostgreSQL, MySQL.
- **DevOps & Operations**: Docker, Cloudflare, PM2, Tailscale, CI/CD.
- **Artificial Intelligence (AI)**: Agent AI.
- **Frontend & Tools**: React.js, JavaScript, TypeScript, GitHub, PWA.

### 2.2 Work Experience
- **NHPTECH** (Backend Developer) [Jan 2026 - Present]:
  - Designed system architecture and developed AI-integrated management & early warning software for hydropower reservoirs.
  - Built and optimized APIs for map data visualization, efficiently handling spatial GeoJSON formats.
  - Integrated AI models to predict rainfall and water inflow, issuing early warning bulletins.
  - Managed the integration and storage of large-scale satellite imagery for reservoir variation analysis.
  - Developed instant notification solutions via FCM (Firebase Cloud Messaging) to transmit emergency alerts to authorities.
  - **Tech Stack**: Node.js, JavaScript, PostgreSQL, Docker, PM2, Redis, Firebase (FCM), AI API.
- **Wintech** (Backend Developer) [Jul 2025 - Dec 2025]:
  - Participated in developing and completing key tasks for the EPOSVN project (Multi-tenant Sales Management & E-Invoicing System).
  - Main responsibilities: Participated in API development and product deployment.
  - Handled automated invoice integration and synchronization (without CAPTCHA), ensuring accurate data capture at points of sale (POS).
  - **Tech Stack**: Laravel, PHP, MySQL, Angular, RESTful API, Docker.

### 2.3 Personal Projects
- **Nga Son Plus** (Local Service Ecosystem & Digital Map)
  - Description: A local service ecosystem for digital transformation and community development in Nga Son district, Thanh Hoa province.
  - **Key Features**:
    1. **Digital Map**: Quick search and lookup of government offices, local amenities, and tourist spots.
    2. **Local Recruitment**: Online bridge connecting local job seekers with businesses.
    3. **OCOP Agricultural Marketplace**: Promotion and distribution platform for local agricultural products and OCOP specialties.
    4. **News & Forum**: 24/7 economic-cultural news and forum for hometown community connection.
  - **Tech Stack**: Node.js, Tailwind CSS, RabbitMQ, Docker, PM2, Cloudflare, PostgreSQL, JavaScript.
- **Warehouse Management System (SMEs)**
  - Description: A smart SaaS-based warehouse management solution featuring multi-tenant architecture, optimized inbound/outbound/inventory workflows, and multi-device mobile compatibility.
  - **Key Features**:
    1. **Multi-tenant SaaS Architecture**: Supporting independent management and flexible subscription options for multiple businesses/branches.
    2. **Stock Flow Management**: Real-time, accurate tracking of product inbound, outbound, and stock levels.
    3. **Zalo Mini App Integration**: Intuitive barcode/QR scanning on mobile devices.
    4. **Offline Synchronization (PWA)**: Progressive Web App support to manage transactions during network disconnects.
  - **Tech Stack**: SaaS, Laravel, MySQL, React, TypeScript, PWA, Zalo Mini App.

### 2.4 Education
- **Hanoi University of Mining and Geology (HUMG)** [2022 - 2026]:
  - Bachelor of Computer Science (GPA: 3.05/4.0).
  - **Achievements**:
    - **"HUMG Cloud" (Student Scientific Research):** Team Leader, winning the Consolation Prize for building an internal document management and cloud storage platform for university teachers and students.
    - **Aptis ESOL English Certificate**

---

## 3. UI/UX Design System

Applying a premium hybrid design pattern featuring a high-tech **Dark Mode Hero Section** that transitions smoothly into an elegant **Light Glassmorphism** theme for the rest of the website.

### 3.1 Color Palette
- **Hero Section (Dark Theme)**:
  - **Background**: `#0b0c15` (Deep Slate Black)
  - **Video Opacity**: `0.85` (Original high-contrast loop colors)
  - **Primary Text**: `#ffffff`
  - **Description Text**: `rgba(255, 255, 255, 0.85)`
  - **Accent Highlight**: `#38bdf8` (Electric Sky Blue)
  - **Hero Badge Glass**: `rgba(255, 255, 255, 0.05)`
- **Body & Remaining Sections (Light Theme)**:
  - **Main Background**: `#f8f9fa` (Soft Light Gray)
  - **Cards/Containers**: `rgba(255, 255, 255, 0.75)` with `backdrop-filter: blur(16px)` and subtle borders.
  - **Primary Accent**: `#4f46e5` (Royal Indigo)
  - **Secondary Accent**: `#0ea5e9` (Electric Sky Blue)
  - **Primary Text**: `#0f172a` (Deep Slate)
  - **Secondary Text**: `#475569` (Slate Gray)

### 3.2 Typography & Contrast
- **Headings**: *Outfit* (Modern, minimalist, and striking)
- **Body Text**: *Inter* (Highly legible, professional)
- **Terminal/CLI Interface**: *JetBrains Mono*
- **Text Enhancement**: Webkit font-smoothing and text-shadows (`text-shadow: 0 2px 12px rgba(0,0,0,0.45)`) applied to hero headings to ensure maximum readability over the dynamic video loop background.

### 3.3 Dynamic Transitions & Key Interactions
1. **Interactive Constellation Canvas**: Interlinked particles moving with mouse movements in the page background.
2. **Text Typing Animation**: Typing effect on headings for roles (`Backend Developer`, `API & Database Developer`, `System Integration Developer`) styled with a glowing `#38bdf8` text shadow.
3. **Advanced Hero Section**: Clean dark section containing a high-contrast programming background video (`video2.mp4`), a subtle grid overlay (`.hero-bg-grid`), slow-moving gradient glow orbs (`.hero-glow-orb`), and a bottom linear-gradient fading the dark section into the light body at the last 5% of height.
4. **Staggered Entrance Animations**: CSS keyframe `fadeInUp` animation running sequentially on load across the hero badge, title, subtitle, description, and action buttons.
5. **Scroll-Responsive Header**: Fully transparent with white logo and navigation links at the top of the page, transitioning dynamically to a white glassmorphic navbar with dark text when scrolled past `50px`.
6. **Skills Grid**: 5 distinct glassmorphism cards that change border/shadow highlights according to their respective accent colors on hover, along with smooth tech-tag hover scaling.
7. **Animated Mouse Indicator**: Smooth scroll-down mouse animation replacing static icons.
8. **Scroll Reveal Animations**: Clean, performant fade-up, fade-left, fade-right, and staggered reveal animations triggered dynamically as sections and elements enter the viewport via IntersectionObserver.

---

## 4. Technical Architecture
Super lightweight Single Page Application (SPA) with zero external script dependencies:
- **Structure**: Semantic HTML5 (`index.html`)
- **Styling**: Vanilla CSS3 using CSS Variables (`index.css`)
- **Interactions**: Vanilla JavaScript ES6+ (`index.js`)

---

## 5. Folder Structure
```text
f:/CV/portfolo/
├── docs/
│   └── specs/
│       └── portfolio_spec.md      # This specification file
├── index.html                     # Primary UI markup
├── index.css                      # Design tokens and layout styling
└── index.js                       # Interactive scripts (typing animation, canvas background, scroll effects)
```
