export default class InputManager {
  constructor(scene, players, ball) {
    this.scene = scene;
    this.players = players;
    this.ball = ball;
    this.selected = null;
  }

  enable() {
    this.scene.input.on('pointerdown', this.handlePointerDown, this);
  }

  handlePointerDown(pointer) {
    const { worldX, worldY } = pointer;
    const clickedPlayer = this.players.find(p =>
      p.getBounds().contains(worldX, worldY)
    );

    if (this.selected) {
      if (clickedPlayer && clickedPlayer !== this.selected) {
        if (this.selected.hasBall) {
          this.scene.tweens.add({
            targets: this.ball,
            x: clickedPlayer.x,
            y: clickedPlayer.y,
            duration: 300,
            onComplete: () => {
              this.selected.hasBall = false;
              clickedPlayer.hasBall = true;
            }
          });
        }
        this.selected.setScale(0.8);
        this.selected = clickedPlayer;
        this.selected.setScale(0.9);
        return;
      }

      this.scene.tweens.add({
        targets: this.selected,
        x: worldX,
        y: worldY,
        duration: 500
      });
      if (this.selected.hasBall) {
        this.scene.tweens.add({
          targets: this.ball,
          x: worldX,
          y: worldY,
          duration: 500
        });
      }
      this.selected.setScale(0.8);
      this.selected = null;
      return;
    }

    if (clickedPlayer) {
      this.selected = clickedPlayer;
      this.selected.setScale(0.9);
    }
  }
}
