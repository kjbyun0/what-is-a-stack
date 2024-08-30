class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if (this.isFull()) {
      throw new Error("Stack is full");
    }

    return this.stack.push(item);
  }

  // remove item from top of stack and return it
  pop() {
    return this.stack.pop();
  }

  // return item at top of stack without removing it
  peek() {
    if (this.isEmpty())
      return undefined;
    return this.stack[this.stack.length - 1];
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    return this.size() === 0;
  }

  // return true if stack is full, otherwise false
  isFull() {
    return this.size() === this.limit;
  }

  // return number of items in stack
  size() {
    return this.stack.length;
  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      if (this.stack[i] === target)
        return this.stack.length - i - 1;
    }
    return -1;
  }

  // print contents of stack: do not return the stack itself!
  print() {
    return "Stack: " + this.stack.join("=>");
  }
}

if (require.main === module) {
  // add your own tests in here
  const myStack = new Stack();

  console.log("Is stack empty: ", myStack.isEmpty());
  console.log("Is stack full: ", myStack.isFull());
  console.log("Push 10: ", myStack.push(10));
  myStack.print();
  console.log("Push 20: ", myStack.push(20));
  myStack.print();
  console.log("Push 30: ", myStack.push(30));
  myStack.print();
  console.log("Push 40: ", myStack.push(40));
  myStack.print();
  console.log("Push 50: ", myStack.push(50));
  myStack.print();
  console.log("Push 60: ", myStack.push(60));
  myStack.print();
  console.log("Push 70: ", myStack.push(70));
  myStack.print();
  console.log("Push 80: ", myStack.push(80));
  myStack.print();
  console.log("Push 90: ", myStack.push(90));
  myStack.print();
  console.log("Push 100: ", myStack.push(100));
  myStack.print();
  // console.log("Push 110: ", myStack.push(110));
  // myStack.print();
  console.log("Is stack empty: ", myStack.isEmpty());
  console.log("Is stack full: ", myStack.isFull());

  console.log("Size: ", myStack.size());
  console.log("Peek: ", myStack.peek());

  console.log("Pop: ", myStack.pop());
  myStack.print();
  console.log("Pop: ", myStack.pop());
  myStack.print();

  console.log("Search 80: ", myStack.search(80));
  console.log("Search 60: ", myStack.search(60));
  console.log("Search 1: ", myStack.search(1));
}

module.exports = Stack;
