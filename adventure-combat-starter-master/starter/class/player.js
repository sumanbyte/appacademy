const {Character} = require('./character');
const {Food} = require('./food');


class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    this.items = []
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    this.currentRoom.items.forEach((item, index)=>{
      if(item.name === itemName){
        this.items.push(item)
        this.currentRoom.items.splice(index, 1)
      }
    })

  }

  dropItem(itemName) {

    this.items.forEach((item, index)=>{
      if(item.name === itemName){
        this.currentRoom.items.push(item)
        this.items.splice(index, 1)
      }
    })

  }

  eatItem(itemName) {

    this.items.forEach((item, index) => {
      if (item.name == itemName && item instanceof Food) {
        this.items.splice(index, 1);
      }
    });

  }

  getItemByName(name) {
    let requiredItem;
    this.items.forEach(item =>{
      if(item.name === name){
        requiredItem = item
      }
    })
    return requiredItem
  }

  hit(name) {

    let enemy = this.currentRoom.getEnemyByName(name)
    if(enemy){
      enemy.attackTarget = this
    }
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
