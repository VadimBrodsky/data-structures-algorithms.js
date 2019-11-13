export default function binarySearch(collection: string | number[], value: string | number): number {
  let left = 0;
  let right = collection.length - 1;

  while (left <= right) {
    const center = Math.ceil((right + left) / 2);
    // console.log({ left, center, right });

    if (collection[center] === value) {
      return center;
    } else if (collection[center] > value) {
      right = center - 1;
    } else if (collection[center] < value) {
      left = center + 1;
    }
  }

  return -1;
}
