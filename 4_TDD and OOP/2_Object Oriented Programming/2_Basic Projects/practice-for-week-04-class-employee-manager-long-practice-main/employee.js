
class Employee{
    constructor(name, salary, title, manager=null){
        //when instantiating Employee instance, a manager is given to it as additional parameter, we are checking if the manager is given and if it is then we are adding this whole created object of Employee class denoting it as 'this' keyword and accessing manager class method from parent.
        this.name = name
        this.salary = salary
        this.title = title
        this.manager = manager

        // manager parameter is coming from manager class which inherits employee class
        if(manager){
            manager.addEmployee(this)
        }
    }
    // calculation of employee bonus 
    calculateBonus(multiplier){
        return this.salary * multiplier
    }
}



// const raph = new Employee('Raphael', 90000, 'Ninja');
// const donny = new Employee('Donatello', 85000, 'Grasshopper');

// console.log(raph.calculateBonus(0.25)); // => 22500
// console.log(donny.calculateBonus(0.15)); // => 12750


module.exports = Employee