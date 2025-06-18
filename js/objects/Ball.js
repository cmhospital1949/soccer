export default class Ball extends Phaser.GameObjects.Ellipse {
  constructor(scene, x, y) {
    super(scene, x, y, 10, 10, 0xffffff);
    scene.add.existing(this);
    this.setOrigin(0.5);
  }
}
