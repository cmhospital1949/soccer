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
    this.cfg = cfg;
    this.field = new Field(this, cfg.width, cfg.height);

    const formation = this.cache.json.get('formations').formations[0];
    this.basePositions = formation.positions;

    this.players = [];
    this.basePositions.forEach(pos => {
      this.players.push(new Player(this, pos.x, pos.y, 0xff0000));
    });
    this.basePositions.forEach(pos => {
      this.players.push(new Player(this, cfg.width - pos.x, pos.y, 0x0000ff));
    });

    this.ball = new Ball(this, this.basePositions[0].x, this.basePositions[0].y);
    this.players[0].hasBall = true;

    this.scoreA = 0;
    this.scoreB = 0;

    this.scene.launch('UIScene', { gameScene: this });
    this.ui = this.scene.get('UIScene');
    this.ui.updateScore(this.scoreA, this.scoreB);

    this.inputManager = new InputManager(this, this.players, this.ball);
    this.inputManager.enable();

    this.tacticsManager = new TacticsManager(this, this.ball);
  }

  resetPositions() {
    this.players.forEach((p, idx) => {
      const posIdx = idx % this.basePositions.length;
      const base = this.basePositions[posIdx];
      if (idx < this.basePositions.length) {
        p.x = base.x;
        p.y = base.y;
      } else {
        p.x = this.cfg.width - base.x;
        p.y = base.y;
      }
      p.hasBall = false;
    });
    this.ball.x = this.basePositions[0].x;
    this.ball.y = this.basePositions[0].y;
    this.players[0].hasBall = true;
  }

  checkGoal() {
    if (this.ball.x < 0) {
      this.scoreB += 1;
      this.ui.updateScore(this.scoreA, this.scoreB);
      this.resetPositions();
    } else if (this.ball.x > this.cfg.width) {
      this.scoreA += 1;
      this.ui.updateScore(this.scoreA, this.scoreB);
      this.resetPositions();
    }
  }

  update() {
    this.tacticsManager.update();
    this.checkGoal();
  }
}
