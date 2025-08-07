---
layout: page
title:  POROMult
description: Multiscale computational poromechanics
img: assets/img/must.jpg
importance: 90
category: finished 
related_publications: true
toc:
  sidebar: left
---

## Overview

Modeling Crack Formation in Porous Materials: From Discs to Diapers


This research project, led by PhD student Faisal Irzal, focused on 
understanding how cracks form in porous materials filled with fluid—such 
as intervertebral discs or shale rock. These materials exhibit complex 
behavior due to the interaction between the solid matrix and fluid 
content. In biological systems like the spine, water loss in cartilage 
with age can lead to painful hernias. In industrial applications such 
as hydraulic fracturing, similar principles are used to break rocks 
and release energy. However, the underlying physics of crack formation 
in such mixtures remains poorly understood.

The core scientific challenge was to develop a multiscale numerical 
model capable of capturing crack initiation and growth in porous media. 
One key finding was that, unlike in solids, cracks in these materials 
can be stabilized by the fluid filling the crack itself. Modeling this 
behavior accurately required incorporating all physical terms at the 
microscale. Faisal Irzal was the first to achieve this in two dimensions 
for large deformations, which led to a significant publication
{% cite Irzal2013b %}.

The team then advanced their methods by adopting isogeometric analysis—an 
emerging numerical technique that enables better handling of higher-order 
derivatives than traditional finite element methods. This shift was made 
in collaboration with industrial partners and researchers familiar with 
the method, including contacts at Abaqus and the group of Tom Hughes in Texas.

Another important discovery came from PhD researcher Francesco Pizzocolo, 
who observed that crack propagation in porous materials can occur in a 
stepwise, intermittent manner. This behavior, confirmed experimentally 
in hydrogels, contrasts sharply with the smoother cracking seen in metals. 
Although the exact material parameters driving this effect are still 
unknown, the findings may have implications for understanding phenomena 
like earthquakes and aftershocks.

The project was supported by a diverse user committee, including Shell, 
Petrobras, Dassault Systèmes, Habanera, and Procter & Gamble. 
Regular meetings with these partners helped ensure practical relevance 
and encouraged reflection from both academic and industrial perspectives.

The success of the project has led to several follow-up initiatives. 
A new hydraulic fracturing simulation project is being developed under 
the Top Sector Energy programme, extending the model into 3D. In parallel, 
a new collaboration with Procter & Gamble explores crack formation in 
superabsorbent gels used in diapers—specifically how swelling in the 
top layer of gel grains can block further absorption.

By bridging biomechanics, civil engineering, and industrial applications, 
the project exemplifies how fundamental modeling can lead to unexpected 
insights and real-world impact across multiple fields.

{% cite Irzal2013b %}
{% cite Irzal2014 %}
{% cite Irzal2013 %}
{% cite IrzalPhD %}

## Project details

| **Project**            | MuST: Multiscale computational poromechanics |
| **Funding**            | NWO |
| **Years**              | 2010-2014                                   |
| **PhD-candidate**      | Faisal Irzal    |
| **Supervisors**        | Jacques Huyghe, Joris Remmers, Rene de Borst |
| **Collaborators**      | P&G |

## More information

https://www.nwo.nl/sites/nwo/files/documents/Eindrapportage_MuST.pdf



