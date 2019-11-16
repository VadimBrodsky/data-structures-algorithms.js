import selectionSort from './selection-sort';

describe('Selection Sort Algorithm', () => {
  it('Should sort an array of numbers in an ascending oder', () => {
    const [sorted, numOfSteps] = selectionSort([-100, -50, 3, 5, 1, 4, 6, 9, 2, -44]);

    expect(sorted).toEqual([-100, -50, -44, 1, 2, 3, 4, 5, 6, 9]);
    expect(numOfSteps).toEqual(52);
  });
});
