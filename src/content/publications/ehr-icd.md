---
title: "Knowledge-Enhanced Matching for EHR-to-ICD-9 Multi-Label Coding"
authors:
  - { name: "Chulin Zhao", me: true }
venue: "Independent research"
year: 2026
status: in-preparation
statusNote: "Checkpoint as of Aug. 2026"
order: 2
highlight: "On MIMIC-III Top-50 ICD coding, a fine-tuned Jina encoder with hybrid phrase/document matching reaches 0.567 official test micro-F1; freezing the encoder and rewriting ICD text lifts the same protocol to 0.572."
---

The task is discharge-note EHR to multi-label ICD-9 on MIMIC-III (8,066 / 1,729 split). An earlier pipeline that recalled LLM candidates and reranked them was abandoned. The current line structures core clinical evidence, expands each ICD into four textual axes (definition, synonyms, EHR expressions, coding boundaries), and scores codes with a fine-tuned Jina encoder. Training saturates at 0.541 micro-F1; the official evaluation protocol (hybrid max of whole-field and phrase scores, cosine gate 0.35) reaches 0.567. Targeted ICD-side rewriting without retraining peaks at 0.572. Remaining errors are semantic, not just missing evidence: status versus event language, mixture dilution, and short-phrase attractors that the frozen embedding cannot separate.
