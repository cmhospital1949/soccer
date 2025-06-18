export default class InputManager {
  constructor(scene, players) {
    this.scene = scene;
    this.players = players;
    this.selected = null;
  }

  enable() {
    this.scene.input.on('pointerdown', this.handlePointerDown, this);
  }

  handlePointerDown(pointer) {
    const { worldX, worldY } = pointer;
    if (this.selected) {
      this.scene.tweens.add({
        targets: this.selected,
        x: worldX,
        y: worldY,
        duration: 500
      });
      this.selected = null;
      return;
    }

    this.players.forEach(player => {
      if (player.getBounds().contains(worldX, worldY)) {
        this.selected = player;
      }
    });
  }
}
