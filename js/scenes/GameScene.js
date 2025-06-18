import Field from '../objects/Field.js';
import Player from '../objects/Player.js';
import Ball from '../objects/Ball.js';
import InputManager from '../managers/InputManager.js';
import TacticsManager from '../managers/TacticsManager.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const cfg = this.cache.json.get('gameConfig').field;
    this.field = new Field(this, cfg.width, cfg.height);

    const formation = this.cache.json.get('formations').formations[0];
    const basePositions = formation.positions;

    this.players = [];
    basePositions.forEach(pos => {
      this.players.push(new Player(this, pos.x, pos.y, 0xff0000));
    });
    basePositions.forEach(pos => {
      this.players.push(
        new Player(this, cfg.width - pos.x, pos.y, 0x0000ff)
      );
    });

    this.ball = new Ball(this, cfg.width / 2, cfg.height / 2);

    this.inputManager = new InputManager(this, this.players);
    this.inputManager.enable();

    this.tacticsManager = new TacticsManager(this, this.ball);
  }

  update() {
    this.tacticsManager.update();
  }
}
