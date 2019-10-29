export default class List {
  private listSize = 0;
  private pos = 0;
  private dataStore = [];

  public clear() {}

  public find(element) {
    const position = -1;
    this.dataStore.forEach(function(item, i) {});
    return position;
  }

  public toString() {}

  public insert() {}

  public append(element) {
    this.dataStore[this.listSize] = element;
    this.listSize += 1;

    return this;
  }

  public remove(element) {
    var foundIndex = this.find(element);

    if (foundIndex > -1) {
      this.dataStore.splice(foundIndex, 1);
      this.listSize -= 1;
      return true;
    } else {
      return false;
    }
  }

  public front() {}

  public end() {}

  public prev() {}

  public next() {}

  public length() {
    return this.listSize;
  }

  public currPos() {}

  public moveTo() {}

  public getElement() {}

  public contains() {}
}
