export default class Player extends Phaser.GameObjects.Container {
  constructor(scene, x, y, tint = 0xff0000) {
    super(scene, x, y);
    scene.add.existing(this);

    const body = scene.add.rectangle(0, 6, 16, 20, tint).setOrigin(0.5, 1);
    const head = scene.add.circle(0, -2, 6, 0xffe0bd).setOrigin(0.5);

    this.add([body, head]);

    this.setSize(16, 26);
    this.setScale(0.8);
    this.hasBall = false;
  }
}
