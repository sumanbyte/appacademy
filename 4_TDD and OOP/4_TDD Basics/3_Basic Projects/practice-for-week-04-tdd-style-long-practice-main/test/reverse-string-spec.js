const { expect } = require('chai')
const reverseString = require('../problems/reverse-string')

describe('reverseString(string)', () => {
    it('should reverse a given string', () => {
        let actual1 = reverseString('fun')
        let expected1 = 'nuf'
        expect(actual1).to.equal(expected1)
    })

    it('should throw an error if the input is not the type of string', () => {
        expect(() => reverseString(null)).to.throw(TypeError)
        expect(() => reverseString(true)).to.throw(TypeError)
        expect(() => reverseString(undefined)).to.throw(TypeError)
        expect(() => reverseString({})).to.throw(TypeError)
        expect(() => reverseString([])).to.throw(TypeError)
       expect(()=>{reverseString(12)}).to.throw(TypeError)
    })
})


// Your code here