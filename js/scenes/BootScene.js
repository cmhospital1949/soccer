export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Load assets here
  }

  create() {
    this.scene.start('MenuScene');
  }
}
