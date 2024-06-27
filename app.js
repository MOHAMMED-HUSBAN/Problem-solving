
// function Reversed(arr) {
//     let stack = [];
//     let arrA = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         stack.push(arr[i]);
//     }

//     while (stack.length > 0) {
//         arrA.push(stack.pop());
//     }
    
//     return arrA;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log("Original Array:", arr);
// let reversedArr = Reversed(arr);
// console.log("Reversed Array:", reversedArr);
/////////////////////////////////////    (2)   /////////////////////////////////////////////////

// function sumArray(arr) {

//     if (arr.length === 0) {
//         return 0;
//     } else {
       
//         return arr[0] + sumArray(arr.slice(1));
//     }
// }

// const array1 = [1, 2, 3];
// console.log("Sum of array1:", sumArray(array1)); // Output: 6

/////////////////////////////////////    (4)   /////////////////////////////////////////////////
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertFirst(data) {
      this.head = new Node(data, this.head);
    }
  
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev; 
    }
  
    printList() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  

  const linkedList = new LinkedList();
  
  linkedList.insertFirst(3);
  linkedList.insertFirst(2);
  linkedList.insertFirst(1);
  
  console.log("Original Linked List:");
  linkedList.printList();
  
  linkedList.reverse();
  
  console.log("Reversed Linked List:");
  linkedList.printList();
  
  /////////////////////////////////////    (5)   /////////////////////////////////////////////////

  