export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    const startText = this.add
      .text(400, 260, 'Start Game', { fontSize: '32px', color: '#ffffff' })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });
    startText.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
    startText.on('pointerover', () => startText.setStyle({ color: '#ffff00' }));
    startText.on('pointerout', () => startText.setStyle({ color: '#ffffff' }));

    const tacticsText = this.add
      .text(400, 340, 'Tactics Planning', { fontSize: '32px', color: '#ffffff' })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });
    tacticsText.on('pointerdown', () => {
      this.scene.start('TacticsScene');
    });
    tacticsText.on('pointerover', () => tacticsText.setStyle({ color: '#ffff00' }));
    tacticsText.on('pointerout', () => tacticsText.setStyle({ color: '#ffffff' }));

  }
}
