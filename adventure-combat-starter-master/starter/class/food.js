const { Item } = require('./item');
// const { Room } = require('./room');
// const { Player } = require('./player');

class Food extends Item {

  constructor(name, description) {
    super(name, description);
  }
}

// let item = new Item("rock", "just a simple rock");
// let room = new Room("Test Room", "A test room");
// let player = new Player("player", room);

// player.items.push(item);

// console.log(player.items.length)//.to.equal(1);

// player.eatItem("rock");

// console.log(player.items.length)//.to.equal(0);


module.exports = {
  Food,
};
