# Project Plan

This plan outlines steps to build the 2D soccer tactics game described in `PRD_0618.md`.

## Roadmap
1. **Setup** - initialize Phaser project and repository docs.
2. **Core Scenes** - create Boot, Menu, Game, and UI scenes.
3. **Player Control** - implement touch controls, movement, and passing.
4. **Tactics Training** - add tips and formation data.
5. **Polish** - improve graphics and add feedback.

## Progress Log
- **Replan** - rewrote project plan and added player sprites with selection scaling.
- **Remove binary asset** - replaced player sprites with drawn circles to avoid binary file issues.
- **Simplify setup** - load Phaser from CDN so running the demo doesn't require npm install.
- **Add scoring** - cute player graphics, ball sprite, and scoreboard with goal reset.
- **Menu fix** - make Start Game and Tactics Planning buttons interactive and update docs.
- **Conflict rule** - clarified automatic merge conflict resolution and changed
  menu buttons to respond on pointer up.
- **Menu reliability** - use pointerdown for menu buttons and refine conflict policy.
- **Loading screen** - add boot loading message, switch menu events to pointer up, clarify blank screen issue.
- **Cleanup** - removed package-lock, simplified package.json and updated docs.
