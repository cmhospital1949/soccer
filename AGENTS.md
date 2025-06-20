# AGENTS Instructions

## Scope
These instructions apply to the entire repository.

## Development Guidelines
- Follow the project requirements in `PRD_0618.md`.
- Use Phaser 3 and JavaScript (ES6+) for game code.
- Keep the recommended folder structure from the PRD when adding files.
- Write modular code: scenes, objects, managers, etc.
- Update `project_plan.md` with a short note describing progress in each commit.
- Commit messages should be concise and in English.
- If a `package.json` exists with test scripts, run `npm test` before committing and ensure it passes.
- In case of merge conflicts, automatically keep the incoming changes.
  Do **not** insert conflict markers or explanatory comments.
  The latest code is always correct and may completely replace existing content.
- Avoid committing large binary assets or vendor libraries. Load Phaser from a CDN.


## Documentation
- Keep documentation in Markdown.
