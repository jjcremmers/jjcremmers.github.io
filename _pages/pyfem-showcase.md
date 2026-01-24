---
layout: page
title: ""
permalink: /software/pyfem/
nav: false          # if you want it in the menu, depends on your nav setup
---

<div class="fe-showcase">

  <!-- HERO SECTION -------------------------------------------------------- -->
  <section class="fe-hero">
    <div class="fe-hero-media"
         style="background-image: url('/assets/img/pyfem/pyfem_background.png');">
    </div>

    <div class="fe-hero-overlay"></div>

    <div class="fe-hero-content container">
      <p class="fe-eyebrow">Finite Element Computing</p>
      <h1 style="font-weight: 700;">PyFEM</h1>
      <p class="fe-hero-text">
        A modular and transparent finite element framework designed for education, 
        research, and rapid model development. PyFEM’s clean, readable Python codebase 
        makes it easy to understand the underlying mechanics, experiment with your own 
        formulations, and build new models from scratch — ideal for both classroom use 
        and advanced prototyping.
        <br>
        Despite its simplicity, PyFEM is a fully capable simulation environment: it 
        includes a suite of linear and nonlinear solvers, a broad collection of finite 
        element formulations (1D–3D, small and large deformation), extensible material 
        models, and flexible I/O utilities with VTK and HDF5 output.
        <br>
        Whether you use it to teach the fundamentals, validate new ideas, or explore 
        novel discretization strategies, PyFEM provides a powerful, lightweight, and 
        highly accessible platform for finite element simulation in Python.
      </p>
      <div class="fe-hero-badges">
        <span>⚙️ All the FE essentials</span>
        <span>🎓 Ideal for classrooms</span>
        <span>📦 Modular components</span>
      </div>
    </div>
  </section>

  <!-- SECTION 1: CORE SOLVER --------------------------------------------- -->
  <section class="fe-scroll-section">
    <div class="fe-scroll-inner container">
      <div class="fe-scroll-sticky">
        <p class="fe-eyebrow">All the essentials</p>
        <h2>Solvers, elements <br>and material models</h2>
        <p class="fe-scroll-text">
          PyFEM provides everything you need for linear and nonlinear finite element analysis. 
          From small-strain to large-strain kinematics, from beam and shell formulations to 
          advanced elasto-plastic and fracture models — it’s all built in. Multiphysics 
          simulations are supported as well.
        </p>
          Unlike commercial black-box codes, Dawn is fully transparent: all source code is 
          accessible, readable, and modifiable. You get high-performance capability with 
          complete control over what happens under the hood.
        </p>
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
  
  <!-- SECTION 2:  ------------------------------------ -->
  <section class="fe-scroll-section fe-alt">
    <div class="fe-scroll-inner container">
      <div class="fe-scroll-sticky">
        <p class="fe-eyebrow">Learn by Doing</p>
        <h2>Learn & Prototype Finite Elements — Fast</h2>
        <p class="fe-scroll-text">
          PyFEM is a clean, readable Python finite element code built for learning and rapid prototyping. Its transparent structure makes nonlinear solid mechanics tangible, ideal for students, educators, and researchers who want to understand how finite elements work—not just run black-box simulations.
        </p>
        </p>
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

    <!-- SECTION 3:  ------------------------------------ -->
  <section class="fe-scroll-section fe-alt">
    <div class="fe-scroll-inner container">
      <div class="fe-scroll-sticky">
        <p class="fe-eyebrow">Serious Mechanics</p>
        <h2>Powerful Nonlinear Analysis in Pure Python</h2>
        <p class="fe-scroll-text">
          From large deformations and plasticity to fracture and contact, PyFEM delivers serious nonlinear mechanics in pure Python. Featuring Newton–Raphson solvers, arc-length methods, cohesive zone models, and dynamics, it connects textbook formulations directly to computational experiments.
        </p>
        </p>
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

    <!-- SECTION 4:  ------------------------------------ -->
  <section class="fe-scroll-section fe-alt">
    <div class="fe-scroll-inner container">
      <div class="fe-scroll-sticky">
        <p class="fe-eyebrow">Built to Extend</p>
        <h2>Research-Ready and Modular by Design</h2>
        <p class="fe-scroll-text">
          PyFEM is designed to be extended. New elements, materials, solvers, or I/O modules can be added through its modular Python API. With HDF5 and VTK output, ParaView visualization, and RVE-based multiscale modeling, it fits naturally into modern research workflows.
        </p>
        </p>
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

   <!-- SECTION 2: MULTI-PHYSICS ------------------------------------------- -->
  <section class="fe-scroll-section">
    <div class="fe-scroll-inner container">
      <div class="fe-scroll-sticky">
        <p class="fe-eyebrow">Artificial Intelligence</p>
        <h2>Optimised for AI simulation</h2>
        <p class="fe-scroll-text">
          PyFEM is engineered for seamless integration with
          the latest AI and machine learning tools, empowering you to automate, accelerate, and 
          enhance your workflows. Effortlessly connect your simulations to Python-based AI frameworks, 
          leverage real-time data exchange, and unlock new possibilities in predictive modeling, optimization, 
          and intelligent design. With PyFEM’s flexible API, you’re not just running simulations—you’re 
          building smart, adaptive solutions that keep you ahead of the curve.
        </p>
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

  <!-- SECTION 5:  ------------------------------------ -->

  <section class="fe-scroll-section fe-alt">
    <div class="fe-scroll-inner container">
      <div class="fe-scroll-sticky">
        <p class="fe-eyebrow">Theory Meets Code</p>
        <h2>From Classic Textbook to Executable Models</h2>
        <p class="fe-scroll-text">
          PyFEM accompanies the textbook Non-Linear Finite Element Analysis of Solids and Structures. Chapter-based examples translate theory into running simulations, allowing students and researchers to explore finite-element concepts by directly modifying and executing real code.
        </p>
        </p>
      </div>

      <div class="fe-scroll-image-card">
        <div class="fe-tag">Pipeline · End-to-end</div>
        <img src="/assets/img/publication_preview/deborstbook.png"
             alt="Non-Linear Finite Element Analysis of Solids and Structures">
        <p class="fe-caption">
          Non-Linear Finite Element Analysis of Solids and Structures
        </p>
      </div>
    </div>
  </section>  
  
 

  <!-- CTA STRIP ----------------------------------------------------------- -->
  <section class="fe-cta-strip">
    <div class="container">
      <h2>Ready to see PyFEM in action?</h2>
      <p>
        Clone the git repository and explore example cases, documentation, and benchmarks. 
        Learn more about projects and courses.
      </p>
      <div class="fe-cta-buttons">
        <a href="https://github.com/jjcremmers/pyfem" class="btn fe-cta-btn-secondary">💻 View on GitHub</a>
        <a href="/courses/4mm00" class="btn fe-cta-btn-secondary">🎓 Example course</a>
        <a href="mailto:j.j.c.remmers@tue.nl?subject=Information%20on%20PyFEM" class="btn fe-cta-btn-secondary">✉️ Get in touch</a>        
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
  background: #ffffff; /*#02030a;*/
  color: #ffffff !important;
}

.fe-hero-media {
  position: absolute;
  inset: 0;
  background-size: cover;        /* keep */
  background-position: center;
  background-repeat: no-repeat;
  transform: none;               /* was: scale(1.05) */
  filter: none;                  /* was: brightness(0.5) */
}

.fe-hero-overlay {
  display: none;                 /* disable blended gradients completely */
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
  background: #001322;
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

/* Final CTA background using same hero image */
.fe-cta-strip {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 6rem 0 7rem;

  background-image: url('/assets/img/pyfem/pyfem_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.fe-cta-strip,
.fe-cta-strip * {
  color: #000000 !important;
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

/* Force white text in hero section */
.fe-hero,
.fe-hero * {
  color: #001322 !important;
  --global-text-color: #001322 !important;
}


</style>

