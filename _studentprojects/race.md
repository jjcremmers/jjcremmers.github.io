---
layout: page
title: Race Against Time
description: GPU-Accelerated Finite Element Methods for High-Performance Computing
img: assets/img/hpc_std.jpg
importance: 1
category: Master 
---

Modern engineering simulations require increasingly detailed models to capture complex phenomena in additive manufacturing, structural optimization, and materials science. Our current Python-based FEM framework is used extensively for optimizing 3D printing toolpaths, which requires millions of repeated simulations to evaluate different printing strategies. Even with a relatively coarse mesh (typically 10x10 elements) optimization times several hours. To make matters worse, accurately capturing local thermal and mechanical phenomena requires much finer meshes with thousands of elements.

This computational bottleneck severely limits our ability to explore different toolpath strategies and perform real-time optimization during printing. Graphics Processing Units (GPUs) offer a solution with their massive parallel computing capability, potentially speeding up each simulation by 10-100x, reducing optimization times from days to minutes. As an optional extension, neural networks could be developed to further accelerate the GPU-based simulations while maintaining physical accuracy.

<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/FEM.gif" title="FEM" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Current CPU-based FEM simulation running on a 100x100 mesh
</div>

### Project Tasks

* Implement core FEM operations on GPU using frameworks like CUDA, CuPy, or JAX
* Optimize memory patterns and create a user-friendly Python interface
* Validate implementation through benchmarking and document performance improvements

### Recommended Reading
* **[GPU Accelerated Finite Element Assembly with Runtime Compilation](https://arxiv.org/abs/1802.03433)**
* **[Targeting Performance and User-Friendliness: GPU-Accelerated Finite Element Computation with Automated Code Generation in FEniCS](https://doi.org/10.1016/j.parco.2023.103051)**
* **[JAX-FEM: A Differentiable GPU-Accelerated 3D Finite Element Solver](https://doi.org/10.1016/j.cpc.2023.108802)**




<br>
<table class="table table-sm mt-2" style="text-align: left;">
  <tbody>
    <tr>
      <td colspan="2" style="background-color: lightgray;"><strong>
      Race Against Time: GPU-Accelerated Finite Element Methods for High-Performance Computing
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

