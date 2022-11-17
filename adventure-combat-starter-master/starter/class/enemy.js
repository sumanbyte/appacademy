const { Character } = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom)
    this.cooldown = 3000
    this.attackTarget = null
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    this.currentRoom = this.currentRoom.exits.w
    this.cooldown = 3000
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function () {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    this.player.health -= 10
    this.cooldown = 3000
  }

  applyDamage(amount) {
    // Fill this in
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}





// let enemy;
// let room;
// let item;
// let sandwich;
// let player;


// room = new Room("Test Room", "A test room");
// item = new Item("rock", "just a simple rock");
// sandwich = new Food("sandwich", "a delicious looking sandwich");
// enemy = new Enemy('enemy', 'an ordinary character', room);
// player = new Player("player", room);


// World.enemies.push(enemy);
// World.setPlayer(player);

// enemy.items.push(item);
// room.items.push(sandwich);


module.exports = {
  Enemy,
};
