const Potion = require('../lib/Potion');

function Player(name = ''){
   this.name = name;

   this.health = Math.floor(Math.random()*10+30);
   this.strength = Math.floor(Math.random()*5+7);
   this.agility = Math.floor(Math.random()*5+7);

   this.inventory = [new Potion('health'), new Potion()];

   // returns an object with various player properties
   Player.prototype.getStats = function() {
      return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
      };
    };

   // returns inventory array or false if empty
   Player.prototype.getInventory = function() {
      if (this.inventory.length) {
        return this.inventory;
      }
      return false;
    };

   //  return the health information of the player
   Player.prototype.getHealth = function(){
      return `${this.name}'s health is now ${this.health}!`;
   };

   // return if player is alive
   Player.prototype.isAlive = function() {
      if(this.health === 0){
         return false;
      }
      return true;
   };

   // return a reduced health for the player
   Player.prototype.reduceHealth = function(health) {
      this.health -= health;

      if (this.health < 0){
         this.health = 0;
      }
   };

   // returns attacked value of the player
   Player.prototype.getAttackValue = function(){
      const min = this.strength -5;
      const max = this.strength +5;

      return Math.floor(Math.random()*(max-min)+min);
   };

   // adds a potion to the player's inventory
   Player.prototype.addPotion = function (potion) {
      this.inventory.push(potion);
   };

   // use potion function 
   Player.prototype.usePotion = function (index) {
      const potion = this.getInventory().splice(index, 1)[0];

      switch(potion.name) {
         case 'agility':
            this.agility += potion.value;
            break;
         case 'health':
            this.health += potion.value;
            break;
         case 'strength':
            this.strength  += potion.value;
            break;
      }
   };

}

module.exports = Player;