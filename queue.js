// queue
// functions: print, enqueue, dequeue, front, size, isEmpty
// FIFO - first in first out

function Queue() {
  collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (value) {
    return collection.push(value);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var q = new Queue();
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.enqueue(8);
q.print();
console.log(q.size());
console.log(q.front());
q.dequeue(2);
console.log(q.size());
