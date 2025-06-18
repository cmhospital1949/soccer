# soccer
Simple 2D soccer tactics demo built with Phaser 3.

## How to Run
1. Launch a local web server (for example, the VSCode Live Server extension) and open `index.html`.
   Opening the file directly may show a blank screen because ES modules require a web server.
   Phaser is loaded from a CDN with a local fallback so no installation is needed.
   If you need to force using the local copy, remove or comment out the CDN
   `<script>` tag in `index.html`.
2. From the menu, choose **Start Game** to begin the match or **Tactics Planning** to read tips. The options highlight when hovered so you know they are clickable.


## Controls
- Tap a player to select them. The selected player grows slightly.
- Tap the field to move the selected player.
- If the selected player has the ball, tap a teammate to pass.
- A goal is scored when the ball crosses either edge of the field.
  The score is shown at the top of the screen.


Visit **Tactics Planning** from the main menu to read basic tips about
using open space and making passes.

The demo loads two teams with a 4-4-2 formation (11 players each) so you can experiment with basic positioning.

## CDN vs Local Phaser
Phaser is served from a CDN by default. The line immediately following loads a
local copy if the CDN fails.

To force the **local** version:
1. Comment out the CDN `<script>` tag in `index.html`.

To use only the **CDN** version:
1. Remove the fallback script that references `js/vendor/phaser.js`.
