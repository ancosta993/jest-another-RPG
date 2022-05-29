const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');


function Game() {
   this.roundNumber = 0;
   this.isPlayerTurn = false;
   this.enemies = [];
   this.currentEnemy;
   this.player;

   Game.prototype.initializeGame = function() {
      // creating and storing new enemies in the enemies Array
      this.enemies.push(new Enemy('goblin', 'sword'));
      this.enemies.push(new Enemy('orc', 'baseball bat'));
      this.enemies.push(new Enemy('skeleton', 'axe'));
      // current enemy fighting the player
      this.currentEnemy = this.enemies[0];

      inquirer
         .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
         })
         // destructure name from the prompt object
         // and creating new player with the name
         .then(({name}) => {
            this.player = new Player(name);

            this.startNewBattle()
         });
   };

}

module.exports = Game;