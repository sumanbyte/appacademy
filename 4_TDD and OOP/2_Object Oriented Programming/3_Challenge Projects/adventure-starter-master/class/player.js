const { Food } = require("./food");

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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
        //currentroom is room instance passed as arguments to the player instance
        // we are accesing the room's items and pushing it to our own player instance items.
        // used array.splice method to delete a specific index item from the room instance.
        // the final result we took the item from room and added to player items.
        this.currentRoom.items.forEach((item, index) =>{
            if(item.name === itemName){
                this.items.push(item)
                this.currentRoom.items.splice(index, 1)
    
            }
        })
  

    }

    dropItem(itemName) {
        // In drop item case here we expect player to have some items to drop in so therefore we have to loop over player instance items array
        this.items.forEach((item, index)=>{
            //access to room instance items array to add the item to the room and delete from player instance
            if(item.name === itemName){
                this.currentRoom.items.push(item)
                this.items.splice(index,1)
            }
        })
    
    }

    eatItem(itemName) {
       
        this.items.forEach((item, index)=>{
            // the itemname which player wants to eat but it might contain unedible.
            // In other words the item specified by player which he wants to eat must be a instance of food class.
            if((item.name === itemName) && item instanceof Food){
                this.items.splice(index, 1)
            }
        })

    }

    getItemByName(name) {
        
        for(let i=0; i<this.items.length; i++){
            if(this.items[i].name === name){
                return this.items[i]
            }
        }
        
    
    }
}

module.exports = {
  Player,
};
