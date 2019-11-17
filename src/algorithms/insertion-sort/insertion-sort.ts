import swap from '../../helpers/swap';

export default function insertionSort<T>(arr: T[]): [T[], number] {
  let n = 0;

  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    const prevValue = arr[i - 1];
    n++;

    if (currentValue < prevValue) {
      for (let j = i; j >= 0; j--) {
        n++;

        if (arr[j - 1] > arr[j]) {
          swap(j - 1, j, arr);
        } else {
          break;
        }
      }
    }
  }

  return [arr, n];
}
