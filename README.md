# GridMind

GridMind is an intelligent community energy optimisation prototype from Universiti Teknologi Malaysia. It models solar generation, community demand, battery storage and grid exchange as one system, then presents the results in an interactive dashboard.

## Current project details

- **Project type:** Student engineering prototype
- **Model scope:** Solar, load, battery and grid exchange
- **Simulation:** Deterministic, labelled model with 15-minute samples
- **Analysis horizons:** 24 hours, 7 days and 30 days
- **Decision layer:** Transparent rule-based battery and grid dispatch
- **Frontend:** React, TypeScript and Vite
- **Status:** Demonstration only; not connected to live electrical infrastructure

## What is included

- Interactive community energy dashboard
- Solar generation and demand visualisation
- Battery state-of-charge and grid import/export views
- Comparison against a conventional-management baseline
- Impact, architecture and optimisation explanations
- Responsive and accessible interface

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Important note

GridMind is a simulation and competition-style prototype. It does not control real electrical hardware, use live meter data or provide certified energy-management advice.
