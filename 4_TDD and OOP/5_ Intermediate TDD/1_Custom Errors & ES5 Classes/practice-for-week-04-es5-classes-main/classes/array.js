// Monkey Patching the built in Array Class According to the test specs.

Array.prototype.isEqual = function(array){
    for(let i=0; i<array.length; i++){
        let el = array[i]
        if(!(el === this[i])){
            return false;
        }
    }
    return true
}



