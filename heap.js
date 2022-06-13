// heaps

// left child: i * 2
// right child: i * 2 + 1
// parent: floor(i/2)

let MinHeap = function () {
  let heap = [null];

  this.insert = function (num) {
    heap.push(num);

    if (heap.length > 2) {
      let index = heap.length - 1;

      while (heap[index] < heap[Math.floor(index / 2)]) {
        if (index >= 1) {
          [heap[Math.floor(index / 2)], heap[index]] = [
            heap[index],
            heap[Math.floor(index / 2)],
          ];

          if (Math.floor(heap.length / 2) > 1) {
            index = Math.floor(heap.length / 2);
          } else {
            break;
          }
        }
      }
    }
  };
};
