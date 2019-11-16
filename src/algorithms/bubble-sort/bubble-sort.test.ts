import bubbleSort, { bubbleSortOptimized } from './bubble-sort';

describe('Bubble Sort Algorithms', () => {
  it('Should sort an array of numbers in an ascending oder', () => {
    const [sorted, numOfSteps] = bubbleSort([3, 5, 1, 4, 6, 9, 2, -44]);

    expect(sorted).toEqual([-44, 1, 2, 3, 4, 5, 6, 9]);
    expect(numOfSteps).toEqual(43);
  });

  it('Should break early if no swaps were made', () => {
    const [sorted, numOfSteps] = bubbleSortOptimized([-44, 1, 3, 2, 4, 5, 6, 9]);

    expect(sorted).toEqual([-44, 1, 2, 3, 4, 5, 6, 9]);
    expect(numOfSteps).toEqual(14);
  });
});
