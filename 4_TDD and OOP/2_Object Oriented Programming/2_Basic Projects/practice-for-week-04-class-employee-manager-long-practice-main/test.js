const Manager = require('./manager')
const Employee = require('./employee')


const Hobbes = new Manager('Hobbes', 1000000, 'Founder')
const Calvin = new Manager('Calvin', 130000, 'Director', Hobbes)

const Susie = new Manager('Susie', 100000, 'Ta Manager', Calvin)
const Lily = new Manager('Lily', 90000, 'TA', Susie)
const Clifford = new Manager('Clifford', 90000, 'TA', Susie)


console.log(Hobbes.calculateBonus(0.05))
console.log(Calvin.calculateBonus(0.05))
console.log(Susie.calculateBonus(0.05))
console.log(Lily.calculateBonus(0.05))
console.log(Clifford.calculateBonus(0.05))