<div align="center">
  <h1>🩺 Armfit Plus - Smart Health Landing Page</h1>
  <h3>High-Performance, SEO-Optimized Astro Landing Page</h3>
  <p>A modern, conversion-focused landing page for the Armfit Plus Smart Blood Pressure & ECG Monitor. Built with <b>Astro</b> and <b>Tailwind CSS v4</b>, featuring interactive canvas animations, glassmorphism UI, and dynamic campaign elements.</p>
  
  <p>
    <img src="https://img.shields.io/badge/Astro-5.16+-FF5D01.svg?logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC.svg?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vanilla_JS-Canvas_API-F7DF1E.svg?logo=javascript&logoColor=black" alt="Vanilla JS" />
    <img src="https://img.shields.io/badge/SEO-Optimized-4CAF50.svg" alt="SEO" />
  </p>
</div>

<br/>

## 📖 Overview
This project is a dedicated Black Friday campaign landing page (`armfit-blackfriday`) for Doramed's flagship health product[cite: 12, 14]. It is engineered for maximum conversion rates, combining clinical trust with cutting-edge web design. 

By leveraging Astro's static site generation (SSG), the page delivers near-instant load times while maintaining complex, hardware-accelerated animations and a rich user experience[cite: 12].

---

## 🔥 Key UI/UX Features

### 🎨 Modern Interface & Glassmorphism
- Extensive use of `backdrop-blur` and semi-transparent backgrounds to create a deep, layered Glassmorphism effect across the Header and Review cards[cite: 19, 21].
- Custom CSS keyframe animations including `float`, `radar-spin`, and `shimmer` to guide user attention to critical elements like FDA approval badges and discount pricing[cite: 13, 20].

### 🧠 Interactive Neural Canvas
- The background features a fully custom, lightweight Vanilla JS `<canvas>` implementation[cite: 14]. 
- It generates a dynamic "neural network" particle system (`#neural-canvas`) that reacts to window resizing, visually reinforcing the product's "AI-Powered" selling point[cite: 13, 14].

### ⏳ Dynamic Campaign Logic
- A built-in, real-time countdown timer specifically targeting the Black Friday deadline, engineered with pure JavaScript to avoid unnecessary framework overhead[cite: 20].
- Dynamic pricing displays calculating exact profit margins to drive conversions[cite: 20].

### 💬 Infinite Auto-Scrolling Testimonials
- Seamless, CSS-only infinite scrolling marquees (`animate-scroll-left` and `animate-scroll-right`) displaying over 10 user reviews without relying on heavy third-party carousel libraries[cite: 13, 21].

---

## 🛠️ Tech Stack & SEO

- **Framework:** Astro (v5.16.0) for zero-JS by default and exceptional Core Web Vitals[cite: 12].
- **Styling:** Tailwind CSS (v4.1.17) utilizing the new Vite integration[cite: 12].
- **SEO & Structured Data:** Fully configured meta tags, Open Graph (OG) properties, Twitter cards, and Schema.org `Product` JSON-LD injection for rich search engine results[cite: 14].

---

## 📁 Project Structure

A modular, component-based architecture:

```text
/
├── public/                 # Static assets (images, videos, fonts)
├── src/
│   ├── components/         # Reusable UI modules
│   │   ├── Header.astro    # Sticky glassmorphism navbar
│   │   ├── Hero.astro      # Product showcase, radar animation & countdown timer
│   │   ├── Features.astro  # Key benefits grid (AI, ECG, ViHealth App)
│   │   ├── DoctorSection.astro # Video overlay and medical endorsement UI
│   │   ├── Reviews.astro   # Infinite scrolling testimonial sliders
│   │   └── Footer.astro    # System status, social links & copyright
│   ├── pages/
│   │   └── index.astro     # Main entry point, SEO metadata & Canvas logic
│   └── styles/
│       └── global.css      # CSS variables, utilities & custom @keyframes
└── package.json            # Project dependencies & scripts
