export default class Player extends Phaser.GameObjects.Ellipse {
  constructor(scene, x, y, color = 0xff0000) {
    super(scene, x, y, 20, 20, color);
    scene.add.existing(this);
    this.setOrigin(0.5);
    this.hasBall = false;
  }
}
