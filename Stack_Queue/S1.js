let stack =[];

// PUSH
stack.push(2);
stack.push(3);
console.log(stack); //[ 2, 3 ]

// POP
console.log(stack.pop()); //3
console.log(stack);// [ 2 ]

// PEEK
console.log(stack[stack.length-1]); //2

// INVALID STACK OPERATION
stack[3];



// QUEUE
let q = [];
q.push(1);
q.push(2);
q.push(3);
q.push(4);

console.log(q); //[ 1, 2, 3, 4 ]

// TO REMOVE FIRST ELEMENT
console.log(q.shift()); //1
console.log(q.shift()); //2

console.log(q); //[ 3, 4 ]

console.log(q[0]);3

// NEVER DO THIS - q.pop();