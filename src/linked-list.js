import Node from './node.js';

export default class LinkedList {
  constructor(){
    this.head = null;
  }

  insertLast(value) {
    let node = new Node(value);
    if(this.head == null) {
      this.head = node;
    } else {
      let temp = this.head;
      while(temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  remove(index) {
    if(index == 0 && this.head != null) {
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
}