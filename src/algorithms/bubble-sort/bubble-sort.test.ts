import bubbleSort, { bubbleSortOptimized } from './bubble-sort';

describe('Bubble Sort Algorithms', () => {
  it('Should sort an array of number in an ascending oder', () => {
    const arr = [3, 5, 1, 4, 6, 9, 2, -44];
    expect(bubbleSort(arr)).toEqual([-44, 1, 2, 3, 4, 5, 6, 9]);
  });

  it('Should break early if no swaps were made', () => {
    const spy = jest.spyOn(console, 'info');
    const arr = [-44, 1, 3, 2, 4, 5, 6, 9];

    expect(bubbleSortOptimized(arr)).toEqual([-44, 1, 2, 3, 4, 5, 6, 9]);
    expect(spy).toHaveBeenCalledWith('no more swaps, breaking early')
  });
});
