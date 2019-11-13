export default function linearSearch(collection: unknown[], value: unknown): number {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === value) {
      return i;
    }
  }

  return -1;
}
