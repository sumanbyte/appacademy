class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {
    this.length++;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === undefined) {
        this.data[i] = val;
        break;
      }
    }
    if (this.length >= this.capacity) {
      this.resize();
    }
  }

  pop() {
    for (let i = this.data.length - 1; i >= 0; i--) {
      if (this.data[i] !== undefined) {
        let value = this.data[i];
        this.data[i] = undefined;
        this.length--;
        return value;
      }
    }
  }

  shift() {
    /*
    initialize a new array.
    copy elements excluding the first element to the new array.
*/
    let newData = [];
    let shiftedValue = this.data[0];
    for (let i = 1; i < this.data.length; i++) {
      newData[i - 1] = this.data[i];
    }

    if (!(this.length <= 0)) {
      this.length--;
    }
    this.data = newData;
    return shiftedValue;
  }

  unshift(val) {
    let newData = [val];
  
    this.length++;
    for (let i = 1; i < this.data.length; i++) {
      newData[i] = this.data[i - 1];
    }
    this.data = newData;
    if (this.length >= this.capacity) {
      this.resize();
    }
  }

  indexOf(val) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    // Your code here
    if (this.length >= this.capacity) {
      this.capacity = this.capacity * 2;
    }
    
    let resized = new Array(this.capacity);
    for (let i = 0; i < this.data.length; i++) {
      resized[i] = this.data[i];
    }
    this.data = resized;
  }
}



module.exports = DynamicArray;
