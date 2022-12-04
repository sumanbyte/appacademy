const chai = require('chai')
const { expect } = require('chai')

const Person = require('../problems/person')

describe('Class person', () => {
    let personObj;
    beforeEach(() => {
        personObj = new Person('rahul', 45)
    })
    it('should intake name and age and set them as properties on the instance', () => {
        expect(personObj.name).to.equal('rahul')
        expect(personObj.age).to.equal(45)
    })

    describe('sayHello()', ()=>{
        it("should return a string of the Person's instance name and a greeting message", () => {
            expect(personObj.sayHello()).to.equal('Hello rahul')
        })
    })

    describe('switchVisit(person)', ()=>{
        it("should return a string that this instance visited the passed in person instance", () => {
            let person1 = new Person('rahul', 34)
            let person2 = new Person('ram', 35)
            let actual = person1.switchVisit(person2)
            let expected = 'ram visited rahul'
            expect(actual).to.equal(expected)
        })
    })

    describe('update(obj)', ()=>{
        it('should update the instance property using passed in object', () => {
            let expected = new Person('lulu', 57)
            personObj.update({ name: 'lulu', age: 57 })
            expect(personObj).to.eql(expected)
        })

        it('should give an error if the argument object does not have name and age property.', () => {
            expect(() => {
                personObj.update({ name: 'lulu' })
            }).to.throw(TypeError)
            expect(() => {
                personObj.update({ age: 57 })
            }).to.throw(TypeError)
        })

        
        it('should give an error if the argument is not an object.', () => {
            expect(() => {
                personObj.update('string123')
            }).to.throw(TypeError)
            expect(() => {
                personObj.update(87)
            }).to.throw(TypeError)
            expect(() => {
                personObj.update(true)
            }).to.throw(TypeError)
            expect(() => {
                personObj.update([])
            }).to.throw(TypeError)
        })
    })




    describe('tryUpdate(obj)', () => {
        it('should return true if the update is successful', () => {
            let anotherPersonObj = new Person('ram', 44)
            let actual = personObj.tryUpdate(anotherPersonObj)
            expect(actual).to.equal(true)
        })

        it('should return false if not updated successfully', () => {
            let anotherPersonObj = new Person('ram')
            let actual = personObj.tryUpdate(anotherPersonObj)
            expect(actual).to.equal(false)
        })
    })


    describe('greetAll(obj)', () => {
        it('should intake an array of person instance and should call sayHello on each Person instance', () => {
            let coolPerson = new Person('mai', 32)
            let coolPerson1 = new Person('hal', 66)
            let coolPerson2 = new Person('nnn', 11)
            let coolPerson3 = new Person('ddd', 12)
            let coolPerson4 = new Person('jjj', 42)

            let obj = [coolPerson, coolPerson1, coolPerson2, coolPerson3, coolPerson4]

            let actual = Person.greetAll(obj)
            let expected = []
            for(let i=0; i<obj.length; i++){
                let objAtIdx = obj[i]
                let helloStr = objAtIdx.sayHello()
                expected.push(helloStr)
            }

            expect(actual).to.eql(expected)
        })
    })

})

