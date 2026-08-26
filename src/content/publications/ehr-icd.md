---
title: "Knowledge-Enhanced Agentic EHR-to-ICD-9 Multi-Label Prediction"
authors:
  - { name: "Chulin Zhao", me: true }
venue: "Independent research"
year: 2026
status: in-preparation
statusNote: "Ongoing since Apr. 2026"
order: 2
highlight: "Assigns ICD-9 codes from unstructured EHR notes by aligning structured evidence with knowledge-expanded code text, refined through an Evaluate–Improve agent loop rather than direct LLM code prediction."
---

This project assigns ICD-9 codes from unstructured discharge notes by aligning structured clinical evidence with knowledge-expanded code representations. An agent first extracts typed evidence across five fields—diagnoses, chronic history, procedures, discharge diagnoses, and hospital course. Each ICD code is expanded along four axes (definition, synonyms, EHR phrasing, and coding boundaries) and iteratively refined by an Evaluate–Improve loop: Evaluate diagnoses matching failures from held-out metrics and writes a failure briefing; Improve rereads the briefing and rewrites the four-axis text. The resulting representations are used to train a matching model between notes and codes.
