export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Load game configuration and data
    this.load.json('gameConfig', 'js/data/game_config.json');
    this.load.json('formations', 'js/data/formations.json');
    this.load.json('playerStats', 'js/data/player_stats.json');
  }

  create() {
    this.scene.start('MenuScene');
  }
}
