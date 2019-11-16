function naiveStringSearch(long: string, search: string): number {
  let count = 0;

  longLoop: for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < search.length; j++) {
      if (long[i + j] !== search[j]) {
        break;
      }

      if (j === search.length - 1) {
        count += 1;
      }
    }
  }

  return count;
}

export { naiveStringSearch as default };
