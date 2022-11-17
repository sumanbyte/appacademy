// const {Room} = require('./room')
// const {Player} = require('./player')
class Item {

  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

}

// let item = new Item("rock", "just a simple rock");
// let room = new Room("Test Room", "A test room");
// let player = new Player("player", room);

// player.items.push(item)
// console.log(room.items.length) // ).to.equal(0);
// console.log(player.items.length) // ).to.equal(1);

// player.dropItem("rock")

// console.log(room.items.length) // ).to.equal(1);
// console.log(player.items.length) // ).to.equal(0);

// console.log(room.getItemByName("rock"))
// // console.log(item)
// // console.log(room.getItemByName("rock")) //.to.equal(item);
// // console.log(item.name) // to.equal("rock"))
// // console.log(item.description) // .to.equal("just a simple rock")

module.exports = {
  Item,
};
