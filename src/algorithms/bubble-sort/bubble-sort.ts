import swap from '../../helpers/swap';

// Bubbles the largest values to the end
function bubbleSort<T>(arr: T[]): [T[], n] {
  let n = 0;

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      n++;
      if (arr[j] > arr[j + 1]) {
        n++;
        swap(j, j + 1, arr);
      }
    }
  }

  return [arr, n];
}

// Stops going through the array if no swaps were made
function bubbleSortOptimized<T>(arr: T[]): [T[], number] {
  let n = 0;
  let swapsMade = false;

  for (let i = arr.length - 1; i > 0; i--) {
    swapsMade = false;

    for (let j = 0; j < i; j++) {
      n++;
      if (arr[j] > arr[j + 1]) {
        n++;
        swap(j, j + 1, arr);
        swapsMade = true;
      }
    }

    if (!swapsMade) {
      console.info('no more swaps, breaking early');
      break;
    }
  }

  return [arr, n];
}

export { bubbleSort as default, bubbleSortOptimized };
