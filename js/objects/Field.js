export default class Field extends Phaser.GameObjects.Rectangle {
  constructor(scene, width, height) {
    super(scene, 0, 0, width, height, 0x228B22);
    scene.add.existing(this);
    this.setOrigin(0);
  }
}
