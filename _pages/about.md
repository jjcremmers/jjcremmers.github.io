---
layout: about
title: About
description: An overview of my activities in computational structural materials science and education.
permalink: /
subtitle: Associate Professor Composite Materials at <a href='https://www.tue.nl'>Eindhoven University of Technology</a>

profile:
  align: right
  image: remmers_photo25.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Eindhoven University of Technology</p>
    <p>Dept. Mechanical Engineering</p>    
    <p>Eindhoven, The Netherlands</p>
    <p>Office: Vector 2.413</p>
    <p>Tel: +31 40 2473175</p>
    <p>E-mail: J.J.C.Remmers@tue.nl</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 3 # leave blank to include all the news in the `_news` folder
---

Welcome to my personal website. I am an academic professional working at the 
intersection of engineering education and research. My research focuses on the 
development of computational models for the mechanical analysis of 
[composite materials](themes/#composite-materials), the simulation of 
[3D printing processes](themes/#additive-manufacturing), and the application of 
[high-performance computing techniques](/themes/#high-performance-computing), including 
reduced-order modeling. In these studies, I rely on my own modular Finite Element
codes [Dawn](/software/dawn) and [PyFEM](/software/pyfem).

Alongside my research activities, I teach a variety of courses in these fields, 
covering topics such as [composite design](courses/4mm00/), 
[additive manufacturing](courses/4mm60), and [computational methods](courses/4em30). 
I am also actively involved in the development and organization of several 
[Multidisciplinary Challenge-Based Learning (CBL)](courses/4cblw00) courses, 
aiming to equip students with skills that bridge theory and practice across 
disciplines.

In addition to my research and teaching, I have a particular interest in the 
role of [Generative AI in education](ai_in_education/). I am especially engaged 
in exploring how Large Language Models can support programming education and 
enhance student learning processes.

On this website, you can find more information about my [research projects](projects/), 
the [courses](courses/) I am involved in, and my broader initiatives in 
engineering education. In addition, you will find more information about the 
[software tools](/repositories) that I have been
developping in the past years.

For more specific information for prospective students, industrial and academic 
partners or educators, please click one of the buttons below.

<div class="fancy-button-group">
  <a href="info/students" class="fancy-button">Students</a>
  <a href="info/phdstudents" class="fancy-button">Ph.D. students</a>
  <a href="info/researchers" class="fancy-button">Researchers</a>  
  <a href="info/industry" class="fancy-button">Industry</a>  
  <a href="info/educators" class="fancy-button">Educators</a>    
</div>

<section class="software-highlight-section">
  <div class="software-card-grid">

    <!-- Tile 1 -->
    <a class="software-card gradient-card" href="/software/dawn/">
      <div class="software-card-bg"
           style="background-image:url('/assets/img/pyfem/hero-dawn.png');"></div>
      <div class="gradient-overlay"></div>
      <div class="software-card-text">
        <p class="label"><br>High Performance Computing</p>
        <h2>Dawn</h2>
      </div>
    </a>

    <!-- Tile 2 -->
    <a class="software-card gradient-card" href="/software/pyfem/">
      <div class="software-card-bg"
           style="background-image:url('/assets/img/dawn/pyfem_background.png');"></div>
      <div class="gradient-overlay"></div>
      <div class="software-card-text">
        <p class="label"><br> Finite ElementCode for Education</p>
        <h2>PyFEM</h2>
      </div>
    </a>

  </div>
</section>


<style>
.fancy-button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 2em 0;
  justify-content: center;
}

.fancy-button {
  flex: 1 1 150px;              /* Allows shrinking and growing */
  max-width: 200px;
  padding: 12px 28px;
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(145deg, #007acc, #005f99);
  color: #fff;
  border: none;
  border-radius: 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.5px;
}

.fancy-button:hover {
  background: linear-gradient(145deg, #005f99, #007acc);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.25);
  color: #fff;
}

/* section wrapper */
.software-highlight-section {
  padding: 4rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

/* responsive two-tile layout */
.software-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
  width: min(1200px, 90vw);
}

/* base tile */
.software-card {
  position: relative;
  display: block;
  aspect-ratio: 3 / 1;          /* ← requested tile ratio */
  border-radius: 18px;
  overflow: hidden;
  text-decoration: none;
  transform: translateZ(0);
}

/* background */
.software-card-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.78);
  transition: transform .45s ease, filter .45s ease;
}

/* smooth Apple-style gradient edge mask */
.gradient-card .gradient-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
     radial-gradient(circle at top left, rgba(0,0,0,0.65) 0%, transparent 60%),
     radial-gradient(circle at bottom right, rgba(0,0,0,0.55) 0%, transparent 55%),
     linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 50%),
     linear-gradient(to top,    rgba(0,0,0,0.35) 0%, transparent 50%);
  mix-blend-mode: soft-light;
}

/* hero-style text */
.software-card-text {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 2;
  color: #fff;
  font-family: system-ui, -apple-system, sans-serif;
}

.software-card-text .label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  opacity: 0.9;
}

.software-card-text h2 {
  font-size: 2.4rem;
  font-weight: 700;
  margin-top: .35rem;
}


/* hover — subtle, premium motion */
.gradient-card:hover .software-card-bg {
  transform: scale(1.06);
  filter: brightness(1.05);
}
</style>

