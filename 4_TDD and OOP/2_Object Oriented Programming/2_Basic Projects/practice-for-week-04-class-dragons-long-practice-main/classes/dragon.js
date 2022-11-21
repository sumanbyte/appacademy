// Your code here
class Dragon{
  constructor(name, color){
    this.name = name
    this.color = color
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  // looping over dragon instances to push the name property to our answer array and returning it.
  static getDragons(...dragons){
    let answer = []
    dragons.forEach(dragon => answer.push(dragon.name))
    return answer
  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}