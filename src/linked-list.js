import Node from './node.js';

export default class LinkedList {
  constructor(){
    this.head = null;
  }

  insertLast(value) {
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
    } else {
      let temp = this.head;
      while(temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  insertAtIndex(index, value) {
    let node = new Node(value);
    if(index === 0) {
      this.addFirst(value);
    } else {
      let curr = this.head;
      let start = 0;
      while(curr != null && start < index - 1) {
        curr = curr.next;
        start++;
      }
      if(curr === null) {
        this.insertLast(value);
      } else {
        node.next = curr.next;
        curr.next = node;
      }
    }
  }

  addFirst(value) {
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  get(index) {
    let curr = this.head;
    let start = 0;
    while(curr != null && start<index) {
      curr = curr.next;
      start++;
    }
    if(curr == null) {
      return -1;
    } else {
      return curr;
    }
  }

  remove(index) {
    if(index === 0 && this.head != null) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      let start = 0;
      while(curr != null && start<index) {
        curr = curr.next;
        start++;
      }
      if(curr == null) {
        return -1;
      }
      if(curr != null && curr.next != null) {
        curr.next = curr.next.next;
      }
    }
  }

  search(value) {
    let curr = this.head;
    while(curr != null) {
      if(curr.data === value) {
        return curr;
      } else {
        curr = curr.next;
      }
    }
    if(curr === null) {
      return -1;
    }
  }

  count() {
    let curr = this.head;
    let count = 0;
    while(curr != null) {
      curr = curr.next;
      count++;
    }
    return count;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    let next = null;
    while(curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr; 
      curr = next;
    }
    this.head = prev;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if(this.head === null && this.tail === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if(this.length === 0) {
      return null;
    } else {
      let prev = null;
      let curr = this.head;
      while(curr.next != null) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
      this.tail = prev;
      this.length--;
      if(this.length === 0) {
        this.head = this.tail = null;
      }
      return curr;
    }
  }

  shift() {
    if(this.head === null) {
      return null;
    } else {
      let oldHead = this.head;
      this.head = oldHead.next;
      this.length--;
      return oldHead;
    }
  }

  unshift(value) {
    let node = new Node(value);
    if(this.head === null && this.tail === null) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index< 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let curr = this.head;
    while(counter<index) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if(foundNode) {
      foundNode.data = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if(index< 0 || index > this.length) {
      return false;
    }
    if(index === this.length) {
      return !!this.push(value);
    }
    if(index === 0) {
      return !!this.unshift(value);
    }
    let node = new Node(value);
    let curr = this.get(index-1);
    node.next = curr.next;
    curr.next = node;
    this.length++;
    return true;
  }

  remove(index) {
    if(index< 0 || index >= this.length) {
      return null;
    }
    if(index === 0) {
      return this.shift();
    }
    if(index === this.length-1) {
      return this.pop();
    }
    let curr = this.get(index-1);
    let removed = curr.next;
    curr.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    let next = null;
    let prev = null;
    for(let i=0; i< this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr; 
      curr = next;
    }
    return this;
  }
}