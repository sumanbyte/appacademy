const {expect} = require('chai')
const myMap = require('../problems/my-map')
const spies = require('chai-spies')
const chai = require('chai')
chai.use(spies)

describe('myMap(inputArray, callback)', ()=>{
    let arr;
    let actual;
    beforeEach(()=>{
        arr = [1,2,3]
        actual = myMap(arr, (elem)=>{
            return elem * 2
        })
    })

    it('should call the callback on each element of the array', ()=>{
        
        expect(actual).to.eql([2,4,6])
    })

    it('should not call the built in Array.map method', ()=>{
        let mapSpy = chai.spy.on(Array.prototype, 'map')
        myMap(arr, Math.sqrt)
        expect(mapSpy).to.have.not.been.called()
    })

    it('should not mutate the original array', ()=>{
        expect(arr).to.eql([1,2,3])
    })
})