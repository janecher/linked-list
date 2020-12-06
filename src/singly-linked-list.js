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