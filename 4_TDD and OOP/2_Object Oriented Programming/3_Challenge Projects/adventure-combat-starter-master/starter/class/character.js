

class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name
    this.description = description
    this.currentRoom = currentRoom
    this.items = []
    this.health = 100
    this.strength = 10
  }

  applyDamage(amount) {
    this.health -= amount
    if(this.health <= 0){
      this.die();
    }
  }

  die() {
    this.items.forEach((item)=>{
      this.currentRoom.items.push(item)
    })
    this.currentRoom = null
  }

}


// const room =  new Room("Test Room", "A test room");
// const item = new Item("rock", "just a simple rock");
// const character = new Character('Character', 'an ordinary character', room);
// character.items.push(item)
// console.log(character.currentRoom, room , character.currentRoom === room) // should be equal to room
// console.log(room.items.length) // 0
// console.log(character.health) // 100

// // console.log(character.items)
// character.applyDamage(100)
// console.log(character.health) // 0

// console.log('after i died........')
// console.log(character.currentRoom) // should be equal to null
// console.log(room.items.length) // 1
// console.log(room.items[0]=== item)
// // console.log(item)



module.exports = {
  Character,
};
