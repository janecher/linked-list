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