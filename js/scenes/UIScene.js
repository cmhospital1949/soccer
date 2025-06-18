export default class UIScene extends Phaser.Scene {
  constructor() {
    super('UIScene');
  }

  create(data) {
    this.gameScene = data.gameScene;
    this.scoreText = this.add
      .text(400, 20, '0 : 0', { fontSize: '24px', color: '#ffffff' })
      .setOrigin(0.5);
  }

  updateScore(a, b) {
    this.scoreText.setText(`${a} : ${b}`);

  }
}
