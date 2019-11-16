export default function swap<T>(index1: number, index2: number, arr: T[]): T[] {
  return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
}
