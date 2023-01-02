class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = []
    for(let i=0; i<defaultSize; i++){
      this.data[i] = undefined;
    }

  }

  read(index) {

    // Your code here
    return this.data[index]
  }

  unshift(val) {

    let ans = []

    if(val){

      this.length++;
      ans[0] = val;

      for(let i=0; i<this.data.length; i++){
        ans[i+1] = this.data[i]
      }

    }

    this.data = ans
    
  }


}



module.exports = DynamicArray;