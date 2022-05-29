const Potion = require('./Potion');

function Enemy(name, weapon){
   this.name = name;
   this.weapon = weapon;
   this.potion = new Potion();

   this.health = Math.floor(Math.random()*10+85);
   this.strength = Math.floor(Math.random()*5+5);
   this.agility = Math.floor(Math.random()*5+5);

   //  return the health information of the enemy
   Enemy.prototype.getHealth = function(){
      return `${this.name}'s health is now ${this.health}!`;
   };

   // return if enemy is alive
   Enemy.prototype.isAlive = function() {
      if(this.health === 0){
         return false;
      }
      return true;
   };

   // return a reduced health for the enemy
   Enemy.prototype.reduceHealth = function(health) {
      this.health -= health;

      if (this.health < 0){
         this.health = 0;
      }
   };

   // return a decription of the enemy 
   Enemy.prototype.getDescription = function() {
      return `A ${this.name} holding a ${this.weapon} has appeared!`;
   };

    // returns attacked value of the player
    Enemy.prototype.getAttackValue = function(){
      const min = this.strength -5;
      const max = this.strength +5;

      return Math.floor(Math.random()*(max-min)+min);
   };
}

module.exports = Enemy;