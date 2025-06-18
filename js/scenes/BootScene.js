export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.cameras.main.setBackgroundColor('#2d2d2d');
    this.add.text(400, 300, 'Loading...', {
      fontSize: '20px',
      color: '#ffffff'
    }).setOrigin(0.5);

    this.load.json('gameConfig', 'js/data/game_config.json');
    this.load.json('formations', 'js/data/formations.json');
    this.load.json('playerStats', 'js/data/player_stats.json');

    this.load.on('complete', () => {
      this.scene.start('MenuScene');
    });
  }

}
