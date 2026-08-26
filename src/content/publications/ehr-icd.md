---
title: "Knowledge-Enhanced Matching for EHR-to-ICD-9 Multi-Label Coding"
authors:
  - { name: "Chulin Zhao", me: true }
venue: "Independent research"
year: 2026
status: in-preparation
statusNote: "Checkpoint as of Aug. 2026"
order: 2
highlight: "This research aims to improve automated ICD coding for unstructured EHR data by exploiting the strengths of LLMs in reasoning, failure analysis, and clinical text understanding, rather than relying on LLMs for direct code matching."
---

This research explores a novel LLM-assisted approach for automated ICD coding from unstructured EHR text. Instead of directly using LLMs for code prediction, I leverage their strengths in clinical language understanding, reasoning, and knowledge refinement to enhance the representation of ICD codes. Each code is expanded along four dimensions: definition, synonyms, EHR expressions, and coding boundaries. An Evaluate–Improver loop is then introduced to iteratively optimize these representations based on feedback from downstream matching performance. The refined representations are combined with a frozen clinical text encoder to improve the semantic alignment between discharge notes and ICD codes.
