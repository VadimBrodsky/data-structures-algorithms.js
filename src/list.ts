export default class List {
  private dataStore: unknown[];
  public listSize: number;
  public pos: number;

  constructor() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
  }

  public append(element: unknown) {
    this.dataStore[this.listSize] = element;
    this.listSize += 1;
  }

  public find(element: unknown): number {
    const position = this.dataStore.findIndex((item) => item === element);
    return position ? position : -1;
  }

  public clear() {}


  public toString() {}

  public insert() {}


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
