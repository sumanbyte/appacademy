const Employee = require('./employee')

class Manager extends Employee{
    // manager constructor inherits employee.
    constructor(name, salary, title, manager, employees=[]){
        super(name, salary, title, manager)
        this.employees = employees
    }

    addEmployee(employee){
        //employees is a array present inside manager constructor
        this.employees.push(employee)
    }

    // method to use privately 
    _totalSubSalary(){
        let sum = 0;
        return this.employees.reduce((accu, employee) => {
            // instance of manager is employee here 
            if(employee instanceof Manager){
                // here employee.salary refers to manager.salary cause we will only enter this block if the employee(manager) is an instance of Manager class
                return accu + (employee.salary + employee._totalSubSalary())
                // 0 + 1lakh + 90k + 90k  = 280k
            }
            else{
                return accu + employee.salary
                // 280k + 85k + 85k
            }
        }, sum)
        // returns 450k 
        // for the first given test
        // console.log(splinter.calculateBonus(0.05)); // => 22500

    }

    calculateBonus(multiplier){
        return (this.salary + this._totalSubSalary()) * multiplier
    }

}



const splinter = new Manager('Splinter', 100000, 'Sensei');
// const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
// const raph = new Manager('Raphael', 90000, 'Ninja', leo);
// const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
// const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

// console.log(splinter.calculateBonus(0.05)); // => 22500
// console.log(leo.calculateBonus(0.05)); // => 17500
// console.log(raph.calculateBonus(0.05)); // => 13000


module.exports = Manager