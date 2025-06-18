export default class Player extends Phaser.GameObjects.Ellipse {
  constructor(scene, x, y, tint = 0xff0000) {
    super(scene, x, y, 32, 32, tint);
    scene.add.existing(this);
    this.setOrigin(0.5);
    this.setScale(0.5);
    this.hasBall = false;

  }
}
