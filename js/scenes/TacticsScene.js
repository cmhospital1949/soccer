export default class TacticsScene extends Phaser.Scene {
  constructor() {
    super('TacticsScene');
  }

  create() {
    this.add.text(400, 100, 'Tactics Planning', { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);
    this.add.text(400, 200, 'Pass to teammates by selecting a player then tapping another.', {
      fontSize: '16px',
      color: '#ffffff',
      wordWrap: { width: 700 }
    }).setOrigin(0.5);
    this.add.text(400, 260, 'Find open space to create better passing options!', {
      fontSize: '16px',
      color: '#ffffff',
      wordWrap: { width: 700 }
    }).setOrigin(0.5);

    const backText = this.add.text(400, 500, 'Back to Menu', { fontSize: '24px', color: '#ffffff' }).setOrigin(0.5);
    backText.setInteractive();
    backText.on('pointerup', () => {
      this.scene.start('MenuScene');
    });
  }
}
