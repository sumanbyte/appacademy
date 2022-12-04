const {expect} = require('chai')
const chai = require('chai');
const { describe } = require('mocha');
const {Triangle, Scalene, Isosceles, Right, Equilateral} = require('../problems/triangle')

describe('Class Triangle', ()=>{
    let myTriangle;
    let side1, side2, side3;
    beforeEach(()=>{
        myTriangle = new Triangle(5, 8, 11)
        side1 = myTriangle.side1
        side2 = myTriangle.side2
        side3 = myTriangle.side3
    })

    it('should set side1, side2 and side3', ()=>{
        expect(side1).to.equal(5)
        expect(side2).to.equal(8)
        expect(side3).to.equal(11)
    })

    describe('getPerimeter()', ()=>{
        it('should return the perimeter', ()=>{
            expect(myTriangle.getPerimeter()).to.equal(24)
        })
    })

    describe('hasValidLengths()', ()=>{
        it('should return true if it is a valid triangle and false otherwise', ()=>{
            let twoSidesSum = side1 + side2
            expect(twoSidesSum).to.be.greaterThan(side3)
        })
    })

    describe('validate()', ()=>{
        it('should add isValid property to the triangle instance according to triangle is valid or not.', ()=>{
            myTriangle.validate()

            let actual = myTriangle.isValid
            let expected = true
            
            expect(actual).to.equal(expected)
        })
    })

    describe('getValidTriangles()', ()=>{
        it('should return all of the instances that are valid triangles.', ()=>{
            let t1 = new Triangle(1,1,5)
            let t2 = new Triangle(5,9,12)
            let t3 = new Triangle(1,1,10)
            let t4 = new Triangle(9, 7, 15)

            let tObj = [t1, t2, t3, t4]

            let actual = Triangle.getValidTriangles(tObj)
            let expected = [t2, t4]

            expect(actual).to.eql(expected)

        })
    })
})

describe('class Scalene', ()=>{
    let myScalene;
    beforeEach(()=>{
        myScalene = new Scalene(5,4,2)
    });

    it('should have three sides and isValidTriangle property set', ()=>{
        expect(myScalene.side1).to.equal(5)
        expect(myScalene.side2).to.equal(4)
        expect(myScalene.side3).to.equal(2)
    });

    it('should have isValidTriangle property with value derived from hasValidSideLengths method', ()=>{
        expect(myScalene.isValidTriangle).to.equal(true)
    })

    describe('isScalene()', ()=>{
        it('should return true if it is a valid scalene triangle and false otherwise.', ()=>{
            let newScalene = new Scalene(3,3,1)
            expect(myScalene.isScalene()).to.equal(true)
            expect(newScalene.isScalene()).to.equal(false)
        })
    })


    describe('validate()', ()=>{
        it('should add an isValidScalene property to the scalene triangle with a value of true if it is a valid scalene triangle and false for invalid scalene triangle', ()=>{
            let newScalene = new Scalene(3,3,1)
            newScalene.validate()
            myScalene.validate()
            expect(myScalene.isValidScalene).to.equal(true)
            expect(newScalene.isValidScalene).to.equal(false)
        })
    })


})

describe('class Isosceles', ()=>{
    let myIsosceles;
    beforeEach(()=>{
        myIsosceles = new Isosceles(5,4,5)
    });

    it('should have three sides and isValidTriangle property set', ()=>{
        expect(myIsosceles.side1).to.equal(5)
        expect(myIsosceles.side2).to.equal(4)
        expect(myIsosceles.side3).to.equal(5)
    });

    it('should have isValidTriangle property with value derived from hasValidSideLengths method', ()=>{
        expect(myIsosceles.isValidTriangle).to.equal(true)
    })

    describe('isIsoceles()', ()=>{
        it('should return true if it is a valid isosceles triangle and false otherwise.', ()=>{
            let newIsosceles = new Isosceles(3,2,1)
            expect(myIsosceles.isIsosceles()).to.equal(true)
            expect(newIsosceles.isIsosceles()).to.equal(false)
        })
    })


    describe('validate()', ()=>{
        it('should add an isValidIsosceles property to the isosceles triangle with a value of true if it is a valid isosceles triangle and false for invalid isosceles triangle', ()=>{
            let newIsosceles = new Isosceles(3,2,1)
            newIsosceles.validate()
            myIsosceles.validate()
            expect(myIsosceles.isValidIsosceles).to.equal(true)
            expect(newIsosceles.isValidIsosceles).to.equal(false)
        })
    })


    


})


describe('right class', ()=>{
    let right, right1;
    beforeEach(()=>{
        right = new Right(3,4,5, 90)
        right1 = new Right(3,4,5, 120)
    })
    it('should create a right angled triangle having one angle 90 degree', ()=>{
        expect(right.side1).to.equal(3)
        expect(right.side2).to.equal(4)
        expect(right.side3).to.equal(5)
        expect(right.degree).to.equal(90)
    })

    it('should have isRight method', ()=>{
        expect(right.isRight()).to.equal(true)
        expect(right1.isRight()).to.equal(false)
       
        
    })

    it('should validate and return a boolean value whether it is a right triangle.', ()=>{
        let actual = right.validate()
        expect(actual).to.equal(true)
        let actual1 = right1.validate()
        expect(actual1).to.equal(false)
    })

    
})


describe('Equilateral class', ()=>{
    let equi, equi1;
    beforeEach(()=>{
        equi = new Equilateral(3,4,5)
        equi1 = new Equilateral(3,3,3)
    })
    it('should create a equilateral triangle', ()=>{
        expect(equi.side1).to.equal(3)
        expect(equi.side2).to.equal(4)
        expect(equi.side3).to.equal(5)

        expect(equi1.side1).to.equal(3)
        expect(equi1.side2).to.equal(3)
        expect(equi1.side3).to.equal(3)
        
    })

    it('should have isEquilateral method', ()=>{
        expect(equi.isEquilateral()).to.equal(false)
        expect(equi1.isEquilateral()).to.equal(true)
       
        
    })

    it('should validate and return a boolean value whether it is a right triangle.', ()=>{
        let actual = equi.validate()
        expect(actual).to.equal(false)
        let actual1 = equi1.validate()
        expect(actual1).to.equal(true)
    })

    
})