// Your code here
// Dragon class imported from dragon.js
const Dragon = require('./dragon')

class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend){
        super(name, color);
        this.lifeGoals = lifeGoals
        this.friend = friend
    }

    hasLifeGoals(){
        // life goal is an array passed as arguments so using foreach loop makes sense here.
        this.lifeGoals.forEach(lifeGoal =>{
            console.log(`${this.name} likes to ${lifeGoal}`)
        })
    }

    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`
    }
}




module.exports = FriendlyDragon