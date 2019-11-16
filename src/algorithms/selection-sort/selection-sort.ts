import swap from '../../helpers/swap';

// Select the smallest value in the array
// and swaps it to the beginning of the array
// O(N^2)
// less swaps than bubble sort
function selectionSort<T>(arr: T[]): [T[], number] {
  let n = 0

  for (let i = 0; i < arr.length; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      n++;
      if (arr[minValueIndex] > arr[j]) {
        minValueIndex = j;
      }
    }

    // only swap if the min value is not already first
    if (i !== minValueIndex) {
      n++;
      swap(i, minValueIndex, arr);
    }
  }

  return [arr, n];
}

export { selectionSort as default };
