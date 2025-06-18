import BootScene from './scenes/BootScene.js';
import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';
import TacticsScene from './scenes/TacticsScene.js';

import UIScene from './scenes/UIScene.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  height: 600,
  scene: [BootScene, MenuScene, TacticsScene, GameScene, UIScene]
};

n
window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
});
