class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }

  sayHello(){
    return "Hello " + this.name
  }

  visit(person){
    return this.name + " visited " + person.name
  }

  switchVisit(person){
    return person.visit(this)
  }

  update(obj){
    if(typeof obj !== 'object'){
      throw new TypeError('argument must be an object')
    }

    if(obj.name && obj.age){
      this.name = obj.name
      this.age = obj.age 
    }else{
      throw new TypeError('argument object must have name and age property')
    }
  }

  tryUpdate(obj){
    try{
      this.update(obj)
      return true
    }catch(e){
      return false
    }
  }

  static greetAll(obj){
    let ansArr = []

    obj.forEach(object=>{
      let helloStr=object.sayHello()
      if(object instanceof Person){
        ansArr.push(helloStr)
      }
    })
    
    return ansArr
  }

}





module.exports = Person;