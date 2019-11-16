const swap = <T>(index1: number, index2: number, arr: T[]): T[] =>
  ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

// Bubbles the largest values to the end
function bubbleSort<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }

  return arr;
}

// Stops going through the array if no swaps were made
function bubbleSortOptimized<T>(arr: T[]): T[] {
  let swapsMade = false;

  for (let i = arr.length - 1; i > 0; i--) {
    swapsMade = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        swapsMade = true;
      }
    }

    if (!swapsMade) {
      console.info('no more swaps, breaking early');
      break;
    }
  }
  return arr;
}

export { bubbleSort as default, bubbleSortOptimized };
