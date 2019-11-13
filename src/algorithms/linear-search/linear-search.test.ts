import linearSearch from './linear-search';

describe('Linear Search', () => {
  it('Should return the intex of the smallest value', () => {
    const collection = [1, 4, 5, 6, 3, 19];
    expect(linearSearch(collection, 3)).toEqual(4);
  });

  it('Should return -1 if the value is not found', () => {
    const collection = [1, 4, 5, 6, 3, 19];
    expect(linearSearch(collection, 23)).toEqual(-1);
  });
});
