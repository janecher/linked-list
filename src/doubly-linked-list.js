class DoublyNode {
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

//better in searching and in get, set, insert - n/2, 
//but takes more memory for extra pointer

class DoublyLinkedList {
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
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if(this.length === 0) {
      return null;
    } else {
      let curr = this.tail;
      if(this.length === 1) {
        this.head = this.tail = null;
      } else {
        this.tail = curr.prev;
        this.tail.next = null;
        curr.prev = null;
      }
      this.length--;
      return curr;
    }
  }

  shift() {
    if(this.length === 0) {
      return null;
    } else {
      let oldHead = this.head;
      if(this.length === 1) {
        this.head = this.tail = null;
      } else {
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
      }
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
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index< 0 || index >= this.length) {
      return null;
    }
    let counter;
    let curr;
    if(index < this.length/2) {
      curr = this.head;
      counter = 0;
      while(counter<index) {
        curr = curr.next;
        counter++;
      }
    } else {
      curr = this.tail;
      counter = this.length-1;
      while(counter > index) {
        curr = curr.prev;
        counter--;
      }
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
    let beforeNode = this.get(index-1);
    let afterNode = beforeNode.next;

    beforeNode.next = node;
    node.prev = beforeNode;

    afterNode.prev = node;
    node.next = afterNode;

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
    let afterRemoved = removed.next;

    curr.next = afterRemoved;
    afterRemoved.prev = curr;

    removed.next = null;
    removed.prev = null;

    this.length--;
    return removed;
  }
}