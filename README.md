# GridMind Website

The official product website for the GridMind desktop energy scenario modelling application.

## Product description

GridMind is a local-first energy scenario simulator and decision-support tool. It lets users configure aligned 24-hour demand, solar-generation and tariff inputs, define battery operating constraints, and compare a self-consumption-first baseline with an approximate cost-optimised battery dispatch schedule.

The desktop application includes:
- A dashboard with a clearly labelled synthetic example.
- An editable Simulation Lab for 24-hour scenarios.
- Baseline and approximate dynamic-programming dispatch comparison.
- Reports with modelled costs, energy flows, validation checks and CSV export.
- Sensitivity analysis for user-defined scenario stress cases.
- A Malaysian energy-reference catalogue with source metadata and historical map links.
- Local workspace preferences.

## Important product boundaries

GridMind is a scenario-modelling application, not a live energy-management system. It does not connect to smart meters, inverters or live grid infrastructure; it does not control physical equipment; and it does not fetch live weather or electricity-price feeds. The Malaysian reference catalogue is contextual and does not automatically populate hourly scenario inputs.

Results are estimates based on supplied assumptions, not measured household outcomes, guaranteed savings, carbon accounting or certified engineering advice. The battery dispatch optimiser uses a discretised state of charge, so its result is approximate and depends on the configured resolution.

Scenario values and completed reports remain in app memory while the desktop app is running. Selected workspace preferences are stored locally on the device. The app does not create accounts or store scenarios in a cloud database.

## Development

Requirements: Node.js 20 or newer.

    npm ci
    npm run dev

Create a type-checked production build:

    npm run build
    npm run preview

## Deployment

The Deploy GridMind to GitHub Pages workflow builds the site and deploys it to GitHub Pages when changes are pushed to main. The production build workflow also runs for pull requests and manual dispatches.

## Repository structure

- src/pages/ — product website pages.
- src/components/ — shared navigation, footer and interface components.
- src/styles/ — global styles and the responsive product-site layer.
- public/ — static assets.
- .github/workflows/ — build and Pages deployment workflows.
