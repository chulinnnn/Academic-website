---
title: Rhythm Runner
url: https://github.com/chulinnnn/Rhythm-Runner/tree/main/Final%20game
role: Independent Unity capstone project.
cover: assets/gamecover.png
order: 2
---

## Rhythm Playground

**Rhythm Playground** is a multi-mode rhythm-learning game for ages 0–15 and music beginners, built as the capstone of the Rhythm Runner coursework repository.

## Four Modes

| Mode | Scene | Age band (design intent) |
|------|-------|--------------------------|
| **Global Music** | WorldMusicExplorer | 0–5 — listen and watch; any key switches tracks |
| **Ocean Rhythm** | OceanRhythm | 5–10 — catch fish on the beat; bucket collection |
| **Climbing Monkey** | VerticalRunner | 10–15 — vertical rhythm climb; bananas and parrots |
| **Dropping Ink (challenge)** | AdvancedRunner | 15+ — three-lane falling targets; one-miss scoring |

Entry scene: **Start.unity**. Each mode card loads its scene; Back returns to Start.

## Tech Stack

- **Engine:** Unity 2022.3 LTS (2D Core template)
- **Platform:** Windows standalone build

## Repository Layout

| Directory | Description |
|-----------|-------------|
| `2Dinclass/` | In-class Unity 2D space shooter (weekly coursework) |
| `prototype/` | Early design sketches and concepts |
| `Final game/` | **Capstone** — playable Rhythm Playground (four modes) |
| `BunnyLegacyArchive/` | Archived early horizontal bunny runner |

## How to Play

Clone the [GitHub repository](https://github.com/chulinnnn/Rhythm-Runner) and open `Final game/` in Unity Hub → Play **Start.unity**. See the repo README for build instructions.

## Controls (summary)

| Mode | Input |
|------|--------|
| Global Music | Any key → next track; Back → menu |
| Ocean Rhythm | Click fish → preview → **Space** on beat |
| Climbing Monkey | **Space** jump; **Down/S** banana; **Space + Left/Right** parrot branches |
| Dropping Ink | **Space** jump; **Down** slide; **Left/Right** lanes |
