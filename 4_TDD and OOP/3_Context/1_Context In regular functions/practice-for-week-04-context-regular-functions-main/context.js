function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // ?

/* undefined eats fish food.
the context of eat function is not defined inside of the class. therefore, context inside of eat function will be the global object. the global object doesn't have the property of name so it will evaluate to undefined.
*/

/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // ?

/* expected: undefined eats fish food.
   got: Nemo eats fish food.

I think because we assigned the eat function as a new method to nemo instance of Fish class. 
Second line, when we execute nemo.eat(), since this is a method style invocation, the context inside of the function will be method's object. therefore, method object has the property of name it will give the output of "Nemo eats fish food."
*/

/********************************* Scenario 3 *********************************/
nemo.eat = eat;
eat(); // since this is a function style invocation. the context inside of the eat function will be global object. global object doesn't have property of name so it will be undefined.


/********************************* Scenario 4 *********************************/
nemo.swim(); // this is a method style invocation where the context inside of the function will be method's object. it will print "Nemo swimming in the water"


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // throws an error