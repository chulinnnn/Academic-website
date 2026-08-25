---
title: "Posterior Variance Is a Constraint Map, Not an Error Map: Closed-Form Uncertainty for Radiative Gaussian Splatting in Sparse-View CT"
authors:
  - { name: "Chulin Zhao", me: true }
  - { name: "Yiran Xu", me: false }
  - { name: "Shu Liu", me: false }
venue: "arXiv preprint"
year: 2026
status: preprint
statusNote: "Targeting ICLR 2027"
equalContribution: true
order: 2
arxiv: "https://arxiv.org/abs/2607.13682"
doi: "https://doi.org/10.48550/arXiv.2607.13682"
highlight: "Derives exact one-pass posterior variance for radiative 3D Gaussians under linear X-ray rendering; provides the first systematic calibration study for Gaussian-splatting CT."
---

We equip radiative Gaussian splatting with a variational density posterior whose predictive variance propagates in closed form in both voxel and projection space. On the official 15-scene benchmark, per-voxel uncertainty ranks reconstruction error on 14/15 scenes. We further diagnose when posterior variance should be read as a data-constraint map rather than an error map, and propose a log-normal reparameterization that improves cross-scene temperature transfer.
