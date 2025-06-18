export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    const startText = this.add
      .text(400, 260, 'Start Game', { fontSize: '32px', color: '#ffffff' })
      .setOrigin(0.5);

    startText.setInteractive();
    startText.on('pointerup', () => {
      this.scene.start('GameScene');
    });

    const tacticsText = this.add
      .text(400, 340, 'Tactics Planning', { fontSize: '32px', color: '#ffffff' })
      .setOrigin(0.5);
    tacticsText.setInteractive();
    tacticsText.on('pointerup', () => {
      this.scene.start('TacticsScene');
    });

  }
}
