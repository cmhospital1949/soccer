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
    const cfg = { width: 800, height: 600 };
    this.field = new Field(this, cfg.width, cfg.height);

    this.players = [
      new Player(this, 200, 300, 0xff0000),
      new Player(this, 600, 300, 0x0000ff)
    ];
    this.ball = new Ball(this, cfg.width / 2, cfg.height / 2);

    this.inputManager = new InputManager(this, this.players);
    this.inputManager.enable();

    this.tacticsManager = new TacticsManager(this, this.ball);
  }

  update() {
    this.tacticsManager.update();
  }
}
