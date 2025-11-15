---
layout: plain
title: "Dawn · Finite Element Framework"
permalink: /dawn-showcase/
nav: false          # if you want it in the menu, depends on your nav setup
---

<div class="fe-showcase">

  <!-- HERO SECTION -------------------------------------------------------- -->
  <section class="fe-hero">
    <div class="fe-hero-media"
         style="background-image: url('/assets/img/dawn/hero-dawn.png');">
    </div>

    <div class="fe-hero-overlay"></div>

    <div class="fe-hero-content container">
      <p class="fe-eyebrow">Finite Element Computing</p>
      <h1>Dawn</h1>
      <p class="fe-hero-text">
        A high-performance, modular finite element framework for complex, 
        multi-physics problems. Designed for researchers and educator who 
        would like to use and implement tradional and unconventional solvers, 
        element fomrulation and materials models.
      </p>
      <div class="fe-hero-badges">
        <span>⚙️ Nonlinear & multi-physics</span>
        <span>🖥️ HPC-ready</span>
        <span>📦 Modular components</span>
      </div>
    </div>
  </section>

  <!-- SECTION 1: CORE SOLVER --------------------------------------------- -->
  <section class="fe-scroll-section">
    <div class="fe-scroll-inner container">
      <div class="fe-scroll-sticky">
        <p class="fe-eyebrow">01 · Core solver</p>
        <h2>From weak form<br>to solution in milliseconds.</h2>
        <p class="fe-scroll-text">
          Define your problem once. Dawn takes care of assembly, boundary conditions,
          and solution strategies — from sparse direct solvers to scalable Krylov methods.
          You focus on physics; Dawn handles the numerics.
        </p>
        <ul class="fe-keypoints">
          <li>Flexible element library (1D–3D, standard & custom).</li>
          <li>Abstracted boundary conditions and constraints.</li>
          <li>Drop-in switch between solver backends.</li>
        </ul>
      </div>

      <div class="fe-scroll-image-card">
        <div class="fe-tag">Live view · Residual norm</div>
        <img src="/assets/img/dawn/solver-dashboard.png"
             alt="Dawn solver residuals and convergence dashboard">
        <p class="fe-caption">
          Track convergence in real time: residuals, step sizes, and solver statistics.
        </p>
      </div>
    </div>
  </section>

  <!-- SECTION 2: MULTI-PHYSICS ------------------------------------------- -->
  <section class="fe-scroll-section fe-alt">
    <div class="fe-scroll-inner container">
      <div class="fe-scroll-sticky">
        <p class="fe-eyebrow">02 · Multi-physics coupling</p>
        <h2>Thermal, mechanical,<br>and beyond — in one model.</h2>
        <p class="fe-scroll-text">
          Couple fields without drowning in boilerplate. Thermal-mechanical simulations,
          damage, phase-fields — all expressed using the same clean abstractions.
        </p>
        <ul class="fe-keypoints">
          <li>Field-agnostic formulation of residuals and tangents.</li>
          <li>Consistent linearization for robust Newton iterations.</li>
          <li>Modular material models you can mix and match.</li>
        </ul>
      </div>

      <div class="fe-scroll-image-card">
        <div class="fe-tag">Example · Thermo-mechanical print</div>
        <img src="/assets/img/dawn/multiphysics-print.png"
             alt="Multi-physics finite element simulation of a printing process">
        <p class="fe-caption">
          Temperature, distortion, and stress all solved in a unified framework.
        </p>
      </div>
    </div>
  </section>

  <!-- SECTION 3: HPC & SCALING ------------------------------------------- -->
  <section class="fe-scroll-section">
    <div class="fe-scroll-inner container">
      <div class="fe-scroll-sticky">
        <p class="fe-eyebrow">03 · HPC & scaling</p>
        <h2>From laptop runs<br>to thousands of cores.</h2>
        <p class="fe-scroll-text">
          Start on your workstation, scale to a cluster. MPI support and domain
          decomposition are built into the core, so you can take the same models
          from prototype to production.
        </p>
        <ul class="fe-keypoints">
          <li>MPI-enabled assembly and I/O.</li>
          <li>Compatible with existing cluster toolchains and modules.</li>
          <li>Profiling hooks for performance-critical kernels.</li>
        </ul>
      </div>

      <div class="fe-scroll-image-card">
        <div class="fe-tag">Scaling · Strong / weak</div>
        <img src="/assets/img/dawn/hpc-scaling.png"
             alt="Scaling performance plots of finite element code on HPC cluster">
        <p class="fe-caption">
          Scaling studies directly exported from Dawn’s built-in performance monitors.
        </p>
      </div>
    </div>
  </section>

  <!-- SECTION 4: WORKFLOW & ECOSYSTEM ------------------------------------ -->
  <section class="fe-scroll-section fe-alt">
    <div class="fe-scroll-inner container">
      <div class="fe-scroll-sticky">
        <p class="fe-eyebrow">04 · Workflow & ecosystem</p>
        <h2>From CAD and meshing<br>to post-processing in one line.</h2>
        <p class="fe-scroll-text">
          Dawn integrates in your existing toolchain: mesh generators, CAD tools,
          Python scripts, and visualization with VTK/ParaView. Build reproducible
          pipelines instead of one-off scripts.
        </p>
        <ul class="fe-keypoints">
          <li>Standard mesh formats in / out (VTK, HDF5, …).</li>
          <li>Python interfaces for pre- and post-processing.</li>
          <li>Command-line tools for batch studies and parameter sweeps.</li>
        </ul>
      </div>

      <div class="fe-scroll-image-card">
        <div class="fe-tag">Pipeline · End-to-end</div>
        <img src="/assets/img/dawn/workflow-pipeline.png"
             alt="End-to-end workflow of Dawn finite element simulations">
        <p class="fe-caption">
          A reproducible pipeline: geometry → mesh → solve → analyze → publish.
        </p>
      </div>
    </div>
  </section>

  <!-- CTA STRIP ----------------------------------------------------------- -->
  <section class="fe-cta-strip">
    <div class="container">
      <h2>Ready to see Dawn in action?</h2>
      <p>
        Explore example cases, documentation, and benchmarks — or get in touch
        to discuss collaborations and student projects.
      </p>
      <div class="fe-cta-buttons">
        <a href="https://github.com/…" class="btn btn-primary fe-cta-btn">View on GitHub</a>
        <a href="/projects/" class="btn fe-cta-btn-secondary">Example projects</a>
      </div>
    </div>
  </section>

</div>

<style>
/* Root wrapper */
.fe-showcase {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--global-text-color, #111);
}

/* ---------------- HERO ---------------- */

.fe-hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #02030a;
  color: #f5f5f7;
}

.fe-hero-media {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  filter: brightness(0.5);
}

.fe-hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%, rgba(88, 187, 255, 0.35), transparent),
              radial-gradient(circle at 80% 80%, rgba(140, 96, 255, 0.4), transparent);
  mix-blend-mode: screen;
  opacity: 0.9;
}

.fe-hero-content {
  position: relative;
  z-index: 1;
  max-width: 720px;
  padding: 5rem 1.5rem;
}

.fe-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.8rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

.fe-hero h1 {
  font-size: clamp(2.8rem, 5vw, 3.8rem);
  line-height: 1.05;
  margin-bottom: 1.5rem;
}

.fe-hero-text {
  font-size: 1.1rem;
  max-width: 30rem;
  opacity: 0.9;
}

.fe-hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.fe-hero-badges span {
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  background: rgba(250, 250, 252, 0.12);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(250, 250, 252, 0.22);
}

/* ---------------- SCROLL SECTIONS ---------------- */

.fe-scroll-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  padding: 6rem 0;
  background: var(--global-bg-color, #f5f5f7);
}

.fe-scroll-section.fe-alt {
  background: #050516;
  color: #f5f5f7;
}

.fe-scroll-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1.1fr);
  gap: 3rem;
}

.fe-scroll-sticky {
  position: sticky;
  top: 96px; /* approx. below nav bar */
  align-self: flex-start;
}

.fe-scroll-section h2 {
  font-size: clamp(2.2rem, 3vw, 2.6rem);
  line-height: 1.1;
  margin: 0.4rem 0 1.2rem;
}

.fe-scroll-text {
  font-size: 1.02rem;
  max-width: 32rem;
}

.fe-keypoints {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.fe-keypoints li {
  position: relative;
  padding-left: 1.4rem;
  margin-bottom: 0.6rem;
  font-size: 0.98rem;
}

.fe-keypoints li::before {
  content: "●";
  position: absolute;
  left: 0;
  top: 0.1rem;
  font-size: 0.6rem;
  opacity: 0.6;
}

/* ---------------- IMAGE CARDS ---------------- */

.fe-scroll-image-card {
  align-self: center;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 1.5rem;
  padding: 1.25rem 1.25rem 1.4rem;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.22);
  border: 1px solid rgba(148, 163, 184, 0.35);
  backdrop-filter: blur(18px);
  transform-origin: center;
  transform: translateY(0) scale(1);
  transition: transform 350ms ease, box-shadow 350ms ease;
}

.fe-alt .fe-scroll-image-card {
  background: radial-gradient(circle at 0 0, rgba(96, 165, 250, 0.15), transparent),
              rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(148, 163, 184, 0.45);
}

.fe-scroll-image-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 32px 80px rgba(15, 23, 42, 0.32);
}

.fe-scroll-image-card img {
  width: 100%;
  display: block;
  border-radius: 1rem;
  margin-bottom: 0.85rem;
}

.fe-tag {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  opacity: 0.75;
  margin-bottom: 0.6rem;
}

.fe-caption {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0;
}

/* ---------------- CTA STRIP ---------------- */

.fe-cta-strip {
  padding: 4.5rem 0 5rem;
  text-align: center;
  background: radial-gradient(circle at 10% 0, rgba(59, 130, 246, 0.12), transparent),
              radial-gradient(circle at 90% 100%, rgba(236, 72, 153, 0.16), transparent),
              var(--global-bg-color, #f5f5f7);
}

.fe-cta-strip h2 {
  font-size: clamp(2rem, 3vw, 2.5rem);
  margin-bottom: 0.9rem;
}

.fe-cta-strip p {
  max-width: 36rem;
  margin: 0 auto 2rem;
  font-size: 1rem;
  opacity: 0.9;
}

.fe-cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.9rem;
}

.fe-cta-btn {
  padding-inline: 1.8rem;
  padding-block: 0.7rem;
  border-radius: 999px;
  font-weight: 500;
}

.fe-cta-btn-secondary {
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.8);
}

/* ---------------- RESPONSIVE ---------------- */

@media (max-width: 991px) {
  .fe-hero {
    min-height: 80vh;
  }

  .fe-scroll-inner {
    grid-template-columns: minmax(0, 1fr);
  }

  .fe-scroll-sticky {
    position: static;
  }

  .fe-scroll-image-card {
    margin-top: 2rem;
  }
}

@media (max-width: 576px) {
  .fe-hero-content {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .fe-hero h1 {
    font-size: 2.3rem;
  }
}

/* Force full-width “Apple style” sections */
.fe-hero,
.fe-scroll-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.fe-hero-media {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.fe-scroll-section .fe-scroll-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Make the final CTA section full-width */
.fe-cta-strip {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 6rem 0 7rem;        /* bigger padding looks more "Apple" */
  background-size: cover;
  background-position: center;
}

/* White text on dark sections */
.fe-alt,
.fe-alt h1,
.fe-alt h2,
.fe-alt h3,
.fe-alt p,
.fe-alt ul,
.fe-alt li,
.fe-alt .fe-eyebrow,
.fe-alt .fe-caption,
.fe-alt .fe-keypoints li {
  color: #ffffff !important;
}

.fe-alt .fe-keypoints li::before {
  color: #ffffff !important;
  opacity: 0.6;
}

.fe-hero {
  color: #ffffff !important;
}


</style>

