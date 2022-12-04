class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
        this.isValid = false
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3
    }

    hasValidSideLengths() {
        let twoSidesSum = this.side1 + this.side2;
        if (twoSidesSum > this.side3) {
            return true
        }
        return false
    }

    validate() {
        if (this.hasValidSideLengths()) {
            this.isValid = true
        } else {
            this.isValid = false
        }
    }

    static getValidTriangles(triangles) {
        let validTriangles = []
        triangles.forEach(triangle => {
            triangle.validate()
            if (triangle.isValid) {
                validTriangles.push(triangle)
            }
        })
        return validTriangles
    }

};

class Scalene extends Triangle{
    constructor(side1, side2, side3){
        super(side1, side2, side3)
        this.isValidTriangle = this.hasValidSideLengths()
    }

    isScalene(){
        if(this.isValidTriangle){
            if(this.side1 !== this.side2 && this.side2 !== this.side3){
                return true
            }
        }
        return false
    }

    validate(){
        this.isValidScalene = this.isScalene()
    }

};

class Isosceles extends Scalene{
    constructor(side1, side2, side3){
        super(side1, side2, side3)
        this.isValidTriangle = this.hasValidSideLengths()
    }

    isIsosceles(){
        if(this.side1 === this.side2 || this.side2 === this.side3 || this.side3 === this.side1){
            return true
        }
        return false
    }

    validate(){
        this.isValidIsosceles = this.isIsosceles();
    }

}

class Right extends Triangle{
    constructor(side1, side2, side3, degree){
        super(side1, side2, side3)
        this.degree = degree
    }

    isRight(){
        if(this.degree === 90){
            return true
        }
        return false
    }

    validate(){
        return this.isRight()
    }
}

class Equilateral extends Triangle{
    constructor(side1, side2, side3){
        super(side1, side2, side3)
    }

    isEquilateral(){
        if(this.side1 === this.side2 && this.side2 === this.side3){
            return true
        }
        return false
    }

    validate(){
        return this.isEquilateral()
    }
}


module.exports = { Triangle, Scalene, Isosceles, Right, Equilateral }