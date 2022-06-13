// stack
// functions: push, pop, peek, length
// LIFO - last in first out

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // adds a value to the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // removes and returns the value at the end of the stack
  pop() {
    if (this.count === undefined) {
      return null;
    }

    this.count--;
    var item = this.storage[this.count];
    delete this.storage[this.count];
    return item;
  }

  // returns the number of items in the stack
  size() {
    return this.count;
  }

  // returns the value at the end of the stack
  peek() {
    return this.storage[this.count - 1];
  }
}

var MyStack = new Stack();

MyStack.push(2);
MyStack.push(4);
MyStack.push(6);
MyStack.push(8);
MyStack.push(10);

console.log(MyStack.peek());
console.log(MyStack.size());
console.log(MyStack.storage);

console.log(MyStack.pop());

console.log(MyStack.peek());
console.log(MyStack.size());
