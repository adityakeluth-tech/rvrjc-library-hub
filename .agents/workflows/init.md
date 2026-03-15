---
description: Initialize and run the RVRJC Library Hub development environment
---

# /init — RVRJC Library Hub Setup

Perform these steps in order to get the development environment fully initialized and running.

## Steps

1. Navigate to the project root directory:
   `c:\Users\adity\Downloads\rvrjc-library-hub-main (1)\rvrjc-library-hub-main`

2. Install dependencies (skip if `node_modules` already exists and is up to date):
// turbo
   ```
   cmd /c "npm install"
   ```

3. Start the Vite development server:
// turbo
   ```
   cmd /c "npm run dev"
   ```

4. Open the app in the browser at `http://localhost:8080` and confirm the page loads correctly.

5. Report to the user:
   - The local URL the app is running on (e.g. `http://localhost:8080`)
   - Any errors or warnings encountered during install or startup
   - The current status of the dev server (running / failed)
