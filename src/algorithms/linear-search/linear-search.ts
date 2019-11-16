export default function linearSearch<T>(collection: T[], value: T): number {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === value) {
      return i;
    }
  }

  return -1;
}
