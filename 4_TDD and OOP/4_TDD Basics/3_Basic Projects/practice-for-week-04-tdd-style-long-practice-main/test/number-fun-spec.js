const {expect} = require('chai');
const {returnsThree, reciprocal} = require('../problems/number-fun')

describe('returnsThree()', () => {
    it('should return the number 3', ()=>{
        expect(returnsThree()).to.deep.equal(3)
    })
})

describe('reciprocal(n)', () => {
    it('should return the reciprocal of a number', ()=>{
        expect(reciprocal(5)).to.equal(1/5)
        expect(reciprocal(1)).to.equal(1)
        
    })

    it('should throw an error if number is not in the range of 1-1000000', ()=>{
        expect(()=>{reciprocal(100000000)}).to.throw(TypeError)
        expect(()=>{reciprocal(0)}).to.throw(TypeError)
    })
})  