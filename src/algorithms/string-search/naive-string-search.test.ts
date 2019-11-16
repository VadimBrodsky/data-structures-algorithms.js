import naiveStringSearch from './naive-string-search';

describe('Naive String Search Algorithms', () => {
  it('should find the number of times the search appears in the long string', () => {
    expect(naiveStringSearch('wowomgzomg', 'omg')).toEqual(2);
    expect(naiveStringSearch('lorie loled', 'lol')).toEqual(1);
  })
});
