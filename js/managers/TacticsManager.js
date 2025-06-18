export default class TacticsManager {
  constructor(scene, ball) {
    this.scene = scene;
    this.ball = ball;
  }

  update() {
    // Simple demo: move the ball slowly to the right
    this.ball.x += 0.5;
  }
}
