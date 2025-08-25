---
layout: page
title:  Ctrl-P 
description: Machine learning to optimise 3D print processes
img: assets/img/ctrlp_logo.png
importance: 2
category: running
related_publications: true
---

Additive Manufacturing (AM), or 3D printing, has the potential to transform 
production chains by enabling complex, tailor-made products to be produced 
on demand, with minimal waste and without costly tooling. Yet despite rapid 
advances in materials, hardware, and software, one fundamental bottleneck 
remains: the translation from a digital design to machine instructions still 
depends heavily on human expertise and trial-and-error. Currently, optimal 
print settings are discovered only after repeated adjustments, which makes the 
process slow, inefficient, and wasteful.

This project aims to make controlling a 3D printer as straightforward as 
printing a paper document: as simple as pressing Ctrl-P. Our vision is a 
fully automated pipeline that converts a digital drawing directly into 
reliable printer instructions, producing objects with optimal mechanical 
and geometrical properties in a single run. To achieve this, we will 
develop a Digital Twin of the printing process: a virtual model that 
integrates physics-based simulations, sensor data, and historic printing 
records. Combined with data-driven learning, this twin will allow us to 
predict how process settings affect the final product, and to automatically 
select the optimal strategy.

<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" 
            path="assets/img/graphical_abstract_ctrlp.png" title="ZigZag path" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
This project has the ambition to make the controlof a 3D printer as simple as 
clicking 'Ctrl-P' and to take over the meticulous process of optimizing the 
design and print process settings from the user. To do so, we propose to develop 
a digital twin to exactly monitor the evolution of defects
during printing (the forward problem) and to enhance in situ measurements needed formetric
learning (the inverseproblem). In the future,the framework can be extended to replace 
large parts of the actual design process (dashed line) in order to allow for the direct manufacturing 
of a brilliant idea.
</div>

The project will not only deliver practical tools for industry but also address 
fundamental scientific questions. At its core lies the challenge of describing and 
controlling the evolution of shapes under physical constraints—a problem that 
connects advanced manufacturing to fields such as evolutionary biology and anatomical 
growth. By building mathematical and AI-based methods to tackle this problem, we 
contribute to both engineering and fundamental science.

Through collaborations with industrial partners and the Eindhoven AI Systems Institute (EAISI),
this project will position TU/e at the forefront of user-centered technological design. 
Its outcomes promise more sustainable production, reduced waste, and a leap toward first-time-right manufacturing.

{% cite Schmeitz2024 %}


<br>
<table class="table table-sm mt-2" style="text-align: left;">
  <tbody>
    <tr>
      <td colspan="2" style="background-color: lightgray;"><strong>
        Ctrl-P: Compute-TRain-Learn 3d Printing
      </strong></td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><strong>Funding</strong></td>
      <td>
        EMDAIR (Eindhoven Artificial Intelligence Systems Institute)
      </td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><strong>Years</strong></td>
      <td>
        2023-
      </td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><strong>PhD-candidate</strong></td>
      <td>
        Ruben Schmeitz and Benjamin Caris
      </td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><strong>Supervisors</strong></td>
      <td>
        Joris Remmers, Rob Wolfs, Olga Mula, Rafael Bailo
      </td>
    </tr>    
  </tbody>
</table>
<br>
