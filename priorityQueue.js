// priority queue
// functions:
// FIFO

function priorityQueue() {
  collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (value) {
    if (this.isEmpty()) {
      collection.push(value);
    } else {
      var added = false;

      for (var i = 0; i < collection.length; i++) {
        if (value[1] < collection[i][1]) {
          collection.splice(i, 0, value);
          added = true;
          break;
        }
      }

      if (!added) {
        collection.push(value);
      }
    }
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
