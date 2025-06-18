export default class Ball extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);
    scene.add.existing(this);

    const g = scene.add.graphics({ x: 0, y: 0 });
    g.fillStyle(0xffffff, 1);
    g.fillCircle(0, 0, 6);
    g.lineStyle(1, 0x000000, 1);
    g.strokeCircle(0, 0, 6);

    this.add(g);
    this.setSize(12, 12);
    this.setOrigin(0.5);
  }
}
