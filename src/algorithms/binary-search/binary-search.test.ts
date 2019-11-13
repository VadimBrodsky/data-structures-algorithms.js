import binarySearch from './binary-search';

describe('Binary Search', () => {
  it('should the index of a value if found in a sorted array', () => {
    const collection = [2, 3, 6, 7, 12, 45, 66, 68, 70, 93, 103, 105, 106, 112, 156, 203, 206, 207];
    expect(binarySearch(collection, 70)).toEqual(8);
  });

  it('should return -1 if the value is not found in the sorted array', () => {
    const collection = [2, 3, 6, 7, 12, 45, 66, 68, 70, 93, 103, 105, 106, 112, 156, 203, 206, 207];
    expect(binarySearch(collection, 71)).toEqual(-1);
  });
});
