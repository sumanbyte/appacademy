// Your code here
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
  
    introduce() {
      console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
    }
  
    static introducePeople(people) {
      
    // Throw an error when passed argument is not an array.
      if (!Array.isArray(people)) {
        throw new Error("introducePeople only takes an array as an argument.");
      } 
  
      // checking if all of the items are instance of the Person class or not
      let isInstanceOfPerson = true;
      people.forEach(person => {
        if (person instanceof Person === false) {
          isInstanceOfPerson = false
        }
      })
  
      if (isInstanceOfPerson === false) {
        throw new Error("All items in array must be Person class instances.");
      } 
    
      people.forEach(person => person.introduce());
      
    }
  
  }
  
  
  const p1 = new Person('hye', 'bruh', 19)
  const p2 = new Person('wwwooo', 'myaaan', 19)

//  Person.introducePeople([])
  /****************************************************************************/
  /******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
  
  try {
    module.exports = Person;
  } catch {
    module.exports = null;
  }