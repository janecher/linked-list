import LinkedList from '../src/linked-list.js';

describe('LinkedList', () => {

  let linkedListWithNodes = new LinkedList();

  beforeEach(() => {
    linkedListWithNodes.insertLast("node1");
    linkedListWithNodes.insertLast("node2");
    linkedListWithNodes.insertLast("node3");
    linkedListWithNodes.insertLast("node4");
  });

  afterEach(() => {
    linkedListWithNodes.head = null;
  });

  test('it should construct a linked list with a head property', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });

  test('LinkedList.prototype.insertLast() should add a node at head if a linked list has no head', () => {
    let linkedList = new LinkedList();
    linkedList.insertLast("head");
    expect(linkedList.head.data).toEqual("head");
  });

  test('LinkedList.prototype.insertLast() should add a node at the end of a linked list', () => {
    linkedListWithNodes.insertLast("new last");
    expect(linkedListWithNodes.head.next.next.next.next.data).toEqual("new last");
  });

  test('it should set a new head if the head is removed', () => {
    linkedListWithNodes.remove(0);
    expect(linkedListWithNodes.head.data).toEqual("node2");
  });

  test('it should return -1 if the index does not exist', () => {
    expect(linkedListWithNodes.remove(9)).toEqual(-1);
  });

  test('it should add node at the beggining of the list', () => {
    linkedListWithNodes.addFirst("first");
    expect(linkedListWithNodes.head.data).toEqual("first");
  });

  test('it should add node at index 0', () => {
    linkedListWithNodes.insertAtIndex(0, "zero");
    expect(linkedListWithNodes.head.data).toEqual("zero");
  });

  test('it should add node at the end of the list, index 4', () => {
    linkedListWithNodes.insertAtIndex(4, "four");
    expect(linkedListWithNodes.head.next.next.next.next.data).toEqual("four");
  });

  test('it should add node at the end of the list, index 6', () => {
    linkedListWithNodes.insertAtIndex(6, "six");
    expect(linkedListWithNodes.head.next.next.next.next.data).toEqual("six");
  });

  test('it should add node at the index 2', () => {
    linkedListWithNodes.insertAtIndex(2, "two");
    expect(linkedListWithNodes.head.next.next.data).toEqual("two");
  });

  test('it should return node at index 0', () => {
    expect(linkedListWithNodes.get(0).data).toEqual("node1");
  });

  test('it should return node at index 2', () => {
    expect(linkedListWithNodes.get(2).data).toEqual("node3");
  });

  test('it should return -1 at index 10', () => {
    expect(linkedListWithNodes.get(10)).toEqual(-1);
  });

  test('it should return value of "node3"', () => {
    expect(linkedListWithNodes.search("node3").data).toEqual("node3");
  });

  test('it should return -1 of "node5"', () => {
    expect(linkedListWithNodes.search("node5")).toEqual(-1);
  });

  test('it should return 4 as there are 4 nodes in the linked list', () => {
    expect(linkedListWithNodes.count()).toEqual(4);
  });

  test('it should return 3 as there are 3 nodes in the linked list after remove at index 2', () => {
    linkedListWithNodes.remove(0);
    expect(linkedListWithNodes.count()).toEqual(3);
  });

  test('it should return 5 as there are 5 nodes in the linked list after insert new node at index 3', () => {
    linkedListWithNodes.insertAtIndex(3, "three");
    expect(linkedListWithNodes.count()).toEqual(5);
  });
});