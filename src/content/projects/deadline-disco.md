---
title: Deadline-Disco
url: https://github.com/Yajingx123/Deadline-Disco
role: Presenter — led the live product demonstration to clients.
award: 1st place, academic-year project competition.
adoption: Over half of first-year students registered and actively used the platform during rollout.
order: 1
---

## Project Overview

The **Academic English Training Web Application** integrates learning, collaboration, and gamification into a single ecosystem. It helps students master academic vocabulary and communication skills through two distinct experiences:

- **Classic Web Interface**: Streamlined, efficient, and professional.
- **Game-style Interface**: An immersive 2D lobby built with **Godot** for interactive navigation.

A comprehensive platform designed for **DIISCU first-year students** to bridge the gap between general English and university-level academic communication.

## Target Users

- **DIISCU Freshmen**: Students adapting to an English-mediated instruction (EMI) environment.
- **Academic Aspirants**: Learners preparing for academic research and collaboration.
- **Interactive Learners**: Students who prefer engaging, gamified educational experiences.

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend** | PHP | Auth, API handling & business logic |
| **Database** | MySQL 8.0 | Persistent data storage |
| **Frontend Core** | React + Vite | Dynamic & modern UI components |
| **Game Engine** | Godot | Interactive navigation & game-style UI |
| **Realtime** | WebSocket | Live chat & instant notifications |
| **Server** | Nginx + PHP-FPM | High-performance web serving |
| **Environment** | Linux | Production deployment |

## Key Features

- **Unified Auth**: Single Sign-On (SSO) across learning modules, forums, and messaging.
- **Academic Workflow**: Tailored practice for academic listening, response, and speaking.
- **Progress Tracking**: Visual vocabulary learning with persistent history and review cycles.
- **Social Ecosystem**: Forum for peer-to-peer knowledge exchange; Message Center for direct and group real-time communication.
- **Team Challenges**: Collaborative weekly tasks with live leaderboards to boost motivation.
- **Dual-Mode Navigation**: Switch between a standard web dashboard and a Godot-powered "Game Lobby".
- **Role-Based Access (RBAC)**: Distinct workflows and dashboards for Students and Admins.

## Repository Structure

```text
Deadline-Disco/
├── Auth/                  # Authentication & session management APIs
├── Academic-Practice/     # Core academic training modules
├── vocba_prac/            # Vocabulary learning engine
├── forum-project/         # Discussion boards (frontend/API)
├── message-center-project/# Real-time chat system
├── GameUI/                # Integrated game-style web views
├── gameUI_src/            # Godot source code & web exports
├── shared/                # Shared runtime configurations
├── admin_page/            # Administrative control panel
├── challenge/             # Team collaboration & ranking modules
├── sql/                   # Database schema & bootstrap scripts
├── redeploy.php           # Unified system startup script
└── doc/                   # Architecture & deployment manuals
```

_Developed as part of the Agile Software Engineering course._
