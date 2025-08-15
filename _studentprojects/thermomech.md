---
layout: page
title: Thermo-Mechanical FEM Solver
description: Coupling Thermal and Mechanical Simulation in Python
img: assets/img/hpc_std.jpg
importance: 1
category: Master 
---

Thermo-mechanical coupling is critical in Powder Bed Fusion (PBF) additive 
manufacturing, where rapid, localized heating and cooling drive both melt-pool 
formation and the buildup of residual stresses that cause warping, cracking, 
and dimensional inaccuracies. To minimize these defects, it is necessary to 
understand how printer parameters (laser power, scan speed, hatch spacing) 
and toolpath patterns influence both melt geometry and stress accumulation.

This project extends a provided Python-based FEM framework that currently 
performs fast thermal analysis and identifies the melt zone by marking 
elements whose temperature exceeds a prescribed threshold as solidified 
geometry.

<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/FEM.gif" title="FEM" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
2D thermal simulation of powder melting and solidification, showing the 
progression of the melt zone over time.
</div>

Based on this model, simple 2D toolpaths can be generated to produce the intended part geometry. The next step is to couple the thermal simulation with a structural solver that computes the residual stresses and deformations arising during cooling and solidification.

### Project Tasks

* Develop coupled thermo-mechanical model including transient heat conduction and temperature-dependent elasticity
* Optimize implementation using sparse matrices and efficient time-stepping schemes
* Validate results against analytical solutions and commercial software benchmarks

### Recommended Reading

* **[On the Simulation Scalability of Predicting Residual Stress and Distortion in Selective Laser Melting](https://doi.org/10.1115/1.4038893)**
* **[A pragmatic part scale model for residual stress and distortion prediction in powder bed fusion](https://doi.org/10.1016/j.addma.2018.05.038)**
* **[Thermo-mechanical simulations of powder bed fusion processes: accuracy and efficiency](https://doi.org/10.1186/s40323-022-00230-y)**



<br>
<table class="table table-sm mt-2" style="text-align: left;">
  <tbody>
    <tr>
      <td colspan="2" style="background-color: lightgray;"><strong>
       Thermo-Mechanical FEM Solver: Coupling Thermal and Mechanical Simulation in Python
      </strong></td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><strong>Supervisors</strong></td>
      <td>
        Ruben Schmeitz, Joris Remmers
      </td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><strong>Exp./Num./Design</strong></td>
      <td>
        Numerical
      </td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><strong>Starting date</strong></td>
      <td>
        September 2025
      </td>
    </tr>
  </tbody>
</table>
<br>

